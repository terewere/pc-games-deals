const filters = {
    currency(input: number) {
      if (isNaN(input)) {
        return "-";
      }
      return '$' + input;
    },

      str_limit(value:string | null, size:number): string {      
        
        if (value == null) {
          return '';
        }

        if (value.length <= size) {
          return value;
        }
        return value.substr(0, size) + '...';
      }
  
  }


  export default filters;