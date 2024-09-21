// const str = 'I love JavaScript';
// // const pattern = /love/;
// let regEx = new RegExp('love','gi')
// const result = regEx.test(str);
// console.log(result);

// const str = 'I love JavaScript';
// const pattern = /love/g;
// const result = str.match(pattern);
// console.log(result);

// const str = 'I love JavaScript';
// const pattern = /love/g;
// const result = str.search(pattern);
// console.log(result);

// const txt = 'Python is the most beautiful language that a human begin has ever created.\
// I recommend python for a first programming language';

// matchReplaced = txt.replace(/python || Python/, 'JavaScript');
// console.log(matchReplaced);

// const txt = 'Python is the most beautiful language that a human begin has ever created.\
// I recommend python for a first programming language';

// matchReplaced = txt.replace(/Python|python/gi, 'JavaScript');
// console.log(matchReplaced);


// const txt = '%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
// T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
// p%e%o%ple.\
// I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
// D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.';

// matches = txt.replace(/%/g, '');
// console.log(matches);


// const pattern = '[Aa]pple'; // this square bracket means either A or a;
// const txt = 'Apple and banana are fruits. An old cliche says an apple a day keeps the  doctor way has been replaced by a banana a day keeps the doctor far far away. '
// const matches = txt.match(pattern);

// console.log(matches);

// const pattern = /[Aa]pple/g; // this square bracket means either A or a
// const txt = 'Apple and banana are fruits. An old cliche says an apple a day a doctor way has been replaced by a banana a day keeps the doctor far far away. '
// const matches = txt.match(pattern);

// console.log(matches);

// const pattern = /\d/g;  // d is a special character which means digits

// const txt = 'This regular expression example was made in January 12,  2020.';

// const matches = txt. match(pattern);

// console.log(matches);  // ["1", "2", "2", "0", "2", "0"], this is not what we want


// const pattern = /[a]./g;  // this square bracket means a and . means any character except new line
// const txt = 'Apple and banana are fruits';
// const matches = txt.match(pattern);

// console.log(matches);  // ["an", "an", "an", "a ", "ar"]

// const pattern = /[a].+/g;  // . any character, + any character one or more times 
// const txt = 'Apple and banana are fruits';
// const matches = txt.match(pattern);

// console.log(matches);  // ['and banana are fruits']


// const pattern = /[a].*/g;  //. any character, + any character one or more times 
// const txt = 'Apple and banana are fruits';
// const matches = txt.match(pattern);

// console.log(matches);  // ['and banana are fruits']


// const txt = 'This regular expression example was made in 00December 6, 123  2019.'
// const pattern = /\d{1,4}/g   // 1 to 4
// const matches = txt.match(pattern)
// console.log(matches)  // ['6', '2019']


// const txt = 'This regular expression example This was made in December 6,  2019.'
// const pattern = /^This/ // ^ means starts with
// const matches = txt.match(pattern)
// console.log(matches)  // ['This']

// const txt = 'This regular expression example was made in December 6,  2019.'
// const pattern = /[^A-Za-z,. ]+/g  // ^ in set character means negation, not A to Z, not a to z, no space, no comma no period
// const matches = txt.match(pattern)
// console.log(matches)  // ["6", "2019"]

// let pattern = /^[A-Z][a-z][^\d]{3,12}$/;
// let name = 'Asabeneh';
// let result = pattern.test(name);

// console.log(result) // true
