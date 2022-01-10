namespace App {
  export function autobind(
    // _ instead of target
    _: any,
    // _2 instead of methodName
    _2: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
      configurable: true,
      get() {
        return originalMethod.bind(this);
      }
    };

    return adjDescriptor;
  }
}

