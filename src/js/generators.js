export default function*() {
    var pre = 0,
        cur = 1;
    for (;;) {
        var temp = pre;
        pre = cur;
        cur += temp;
        yield cur;
    }
}
