# OPTIONS

Метод OPTIONS HTTP запрашивает разрешенные параметры связи для заданного URL или сервера.
Это может использоваться для проверки разрешенных методов HTTP для запроса или для определения того,
будет ли запрос успешным при выполнении предварительного запроса CORS. Клиент может указать URL с помощью этого метода
или звездочку (*) для ссылки на весь сервер.

## Примеры

### Определение разрешенных методов запроса

Чтобы узнать, какие методы запросов поддерживает сервер, можно использовать curl программу командной строки для отправки
OPTIONS запроса:

```
curl -X OPTIONS https://example.org -i
```

Это создает следующий HTTP-запрос:

```
OPTIONS / HTTP/2
Host: example.org
User-Agent: curl/8.7.1
Accept: */*
```

Ответ содержит Allow заголовок, содержащий разрешенные методы:

```
HTTP/1.1 204 No Content
Allow: OPTIONS, GET, HEAD, POST
Cache-Control: max-age=604800
Date: Thu, 13 Oct 2016 11:45:00 GMT
Server: EOS (lax004/2813)
```

### Предварительно обработанные запросы в CORS

В CORS предварительный запрос отправляется с помощью OPTIONS метода, чтобы сервер мог ответить, приемлемо ли отправлять
запрос. В этом примере мы запросим разрешение для следующих параметров:

* Заголовок Access-Control-Request-Method, отправляемый в предварительном запросе, сообщает серверу, что при отправке
  фактического запроса у него будет POST метод запроса.
* Заголовок Access-Control-Request-Headers сообщает серверу, что при отправке фактического запроса он будет иметь
  заголовки X-PINGOTHER и Content-Type.

```
OPTIONS /resources/post-here/ HTTP/1.1
Host: bar.example
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-us,en;q=0.5
Accept-Encoding: gzip,deflate
Connection: keep-alive
Origin: https://foo.example
Access-Control-Request-Method: POST
Access-Control-Request-Headers: content-type,x-pingother
```

Теперь сервер может ответить, примет ли он запрос при таких обстоятельствах. В этом примере ответ сервера говорит, что:

Access-Control-Allow-Origin
Источнику https://foo.example разрешено запрашивать bar.example/resources/post-here/URL-адрес следующим образом:

Access-Control-Allow-Methods
POST, GET, и OPTIONS являются разрешенными методами для URL. (Этот заголовок похож на Allow заголовок ответа, но
используется только для CORS .)

Access-Control-Allow-Headers
X-PINGOTHER и Content-Type являются разрешенными заголовками запроса для URL.

Access-Control-Max-Age
Указанные выше разрешения могут кэшироваться в течение 86 400 секунд (1 день).

```
HTTP/1.1 200 OK
Date: Mon, 01 Dec 2008 01:15:39 GMT
Server: Apache/2.0.61 (Unix)
Access-Control-Allow-Origin: https://foo.example
Access-Control-Allow-Methods: POST, GET, OPTIONS
Access-Control-Allow-Headers: X-PINGOTHER, Content-Type
Access-Control-Max-Age: 86400
Vary: Accept-Encoding, Origin
Keep-Alive: timeout=2, max=100
Connection: Keep-Alive
```
