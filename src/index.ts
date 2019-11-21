class Foo {
  num: number;

  constructor({ num }: { num: number }) {
    this.num = num;
  }

  stringifyNum = () => {
    return `${this.num}`;
  };

  increment = () => {
    this.num++;
  };
}

const foo = new Foo({ num: 1 });

console.log(foo.stringifyNum());

foo.increment();

console.log(foo.stringifyNum());
