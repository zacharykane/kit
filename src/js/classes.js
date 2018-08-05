class Base {
    constructor(x) {
        this.x = x;
    }

    //Property initializer syntax
    instanceProperty = 'bork';

    boundFunction = () => {
        return this.instanceProperty;
    };

    //Static class properties
    static staticProperty = 'babelIsCool';

    static staticFunction = function() {
        return Base.staticProperty;
    };
}

export default class Inherits extends Base {
    constructor(a) {
        super(a);
    }

    get count() {
        return this.x;
    }

    set aType(newA) {
        this.x = newA;
    }
}
