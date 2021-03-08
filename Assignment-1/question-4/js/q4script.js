function lang(value) {
    if (value == 'es') {
        return 'Hola mundo';
    } else if (value == 'de') {
        return 'Hallo Welt';
    } else if (value =='en') {
        return 'Hello, World';
    }
}

console.log(lang('en'));
console.log(lang('de'));
console.log(lang('es'));