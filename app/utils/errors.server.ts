export class CustomError extends Error {
   constructor(public message: string, private statusCode: number) {
      super();
      this.message = message;
      this.statusCode = statusCode;

      Object.setPrototypeOf(this, Error.prototype);
   }
}
