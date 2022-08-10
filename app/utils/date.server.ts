export const formatDate = (date: Date) => {
   const d = new Date(date);

   let formated = d.toISOString().split("T")[0];
   return formated.split('-').reverse().join('/');
};

export const timeSince = function (date: Date) {
   if (typeof date !== 'object') {
      date = new Date(date);
   }

   // @ts-ignore
   var seconds = Math.floor((new Date() - date) / 1000);
   var intervalType;

   var interval = Math.floor(seconds / 31536000);
   if (interval >= 1) {
      intervalType = 'year';
   } else {
      interval = Math.floor(seconds / 2592000);
      if (interval >= 1) {
         intervalType = 'month';
      } else {
         interval = Math.floor(seconds / 86400);
         if (interval >= 1) {
            intervalType = 'day';
         } else {
            interval = Math.floor(seconds / 3600);
            if (interval >= 1) {
               intervalType = "hour";
            } else {
               interval = Math.floor(seconds / 60);
               if (interval >= 1) {
                  intervalType = "minute";
               } else {
                  interval = seconds;
                  intervalType = "second";
               }
            }
         }
      }
   }

   if (interval > 1 || interval === 0) {
      intervalType += 's';
   }

   return interval + ' ' + intervalType;
};
// var aDay = 24 * 60 * 60 * 1000;
// console.log(timeSince(new Date('2022-08-09T08:32:24.954Z')));

// console.log(moment('2022-08-09T08:32:24.954Z').fromNow());