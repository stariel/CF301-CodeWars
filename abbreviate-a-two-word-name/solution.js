function abbrevName(name){
    
        let nameArr = name.split(' ');
        return nameArr[0].charAt(0).toUpperCase() + '.' + nameArr[1].charAt(0).toUpperCase();
    }