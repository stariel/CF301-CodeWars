function formatWords(words){
    if (words) {
      let filtered = words.filter(x => x);
      let last = ' and ' + filtered.slice(-1);
      let joined = filtered.join(', ');
      return joined.replace(/,([^,]+)$/g, last);
      }
      else {
      return "";
      }
    }