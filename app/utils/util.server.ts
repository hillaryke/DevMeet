export interface IErrors {
   [key: string]: string;
}

interface IFormData {
   [key: string]: any;
}

export const validateFields = (formatedFormData: any, errorMessages?: any, fieldsToValidate?: string[],) => {
   const errors: IErrors = {};
   if (!fieldsToValidate) {
      for (const field of Object.keys(formatedFormData)) {
         if (!formatedFormData[field as keyof typeof formatedFormData]) {
            if (errorMessages) {
               errors[field] = errorMessages[field] || "This field is required";
            } else {
               errors[field] = "This field is required";
            }
         }
      }
   }

   for (const index in fieldsToValidate) {
      const field = fieldsToValidate[index as any];
      if (!formatedFormData[field]) {
         errors[field] = errorMessages[field] || "This field is required";
      }

   }

   if (Object.keys(errors).length !== 0) {
      return errors;
   }
   return null;
};

export const formDataToString = (formData: any, fieldNames: string[]) => {
   const formated: IFormData = {};
   for (const index in fieldNames) {
      const field = fieldNames[index];
      const fieldData = formData.get(field);
      formated[field] = fieldData === null ? "" : fieldData.toString();
   }

   return formated;
};

export const formDataToObject = (formData: any, fieldNames: string[]) => {
   const Data: IFormData = {};
   for (const index in fieldNames) {
      const field = fieldNames[index];
      const fieldData = formData.get(field);

      if (fieldData === null) {
         Data[field] = false;
      } else if (fieldData == "false" || fieldData == "true") {
         Data[field] = JSON.parse(fieldData);
      } else {
         Data[field] = fieldData;
      }
   }
   return Data;
};

export const processFormData = async (
   request: Request,
   fieldNames: string[],
   errorMessages?: any,
   fieldsTovalidate?: string[],
   dateFields?: string[],
) => {
   const formData = await request.formData();
   let formated = formDataToObject(formData, fieldNames);

   if (dateFields) {
      for (const field of dateFields) {
         const date = formated[field];
         if (date) {
            formated[field] = new Date(date);
         } else {
            formated[field] = null;
         }
      }
   }

   const errors = validateFields(formated, errorMessages, fieldsTovalidate);

   return { errors, data: formated };
};