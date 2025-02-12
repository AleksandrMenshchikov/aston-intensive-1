let group = getGroup();

group[0](); // 10
group[5](); // 10

function getGroup() {
    let students = [];
    let i = 0;

    while (i < 10) {
        students[i] = function() {
            console.log(i);
        }
        i++
    }

    return students;
}
