export default function*() {
    let pre = 0;

    for (let cur = 1; cur < 100; cur += temp) {
        var temp = pre;
        pre = cur;
        yield cur;
    }
}
