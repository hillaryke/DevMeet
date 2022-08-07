interface IErrors {
   [key: string]: string;
}

export const validateFields = (fields: any, errorMessages: any) => {
   const errors: IErrors = {};
   for (const field of Object.keys(fields)) {
      if (!fields[field as keyof typeof fields]) {
         errors[field] = errorMessages[field] || "This field is required";
      }
   }
   if (Object.keys(errors).length !== 0) {
      return errors;
   }
   return null;
};