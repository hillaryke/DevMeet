interface IErrors {
   [key: string]: string;
}

interface IFormData {
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

export const formDataToString = (formData: any, ...fields: any) => {
   const formated: IFormData = {};
   for (const index in fields) {
      const field = fields[index];
      const fieldData = formData.get(field);
      formated[field] = fieldData === null ? "" : fieldData.toString();
   }

   return formated;
};