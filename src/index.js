module.exports = function check(str, bracketsConfig) {

	// bracketsConfig length = nb = n bracket
	const nb = bracketsConfig.length;


	// strM length = nstr 
	// strM = str->array
	const strA = str.split('');
	const nstr = strA.length;

	let trueOrFalse = 0;


  for ( let i = 0; i < nb; i++) {

  	let brackets = bracketsConfig[i];


  	// openBracket=ob closeBracket=cb
  	let ob= brackets[0];
  	let cb = brackets[1];

 	// openBracketCount=obc closeBracketCount=cbc
	let obc = 0;
	let cbc = 0;

  	for ( let j = 0; j < nstr; j++ ) {
  		if ( strA[j] == ob ) {
  			obc += 1;
  		};
		if ( strA[j] == cb ) {
  			cbc += 1;
  		};
  		if (cbc > obc) {
  			trueOrFalse = false;
  			break;
  		};
  	}; 

  	if ( (obc == cbc) && (cbc != 0) && (obc != 0) ) {
  		trueOrFalse = true;
  	} else {
  		trueOrFalse = false;
  		break;
  	};

  };

  return (trueOrFalse);
}



// module.exports = function check(str, bracketsConfig) {

// 	const nb = bracketsConfig.length;
// 	let trueOrFalce = 0;

// 	const strM = str.split('');
// 	const nstr = strM.length;


//   for ( let i = 0; i < nb; i++) {

//   	let brackets = bracketsConfig[i];
//   	// openBracket=ob closeBracket=cb
//   	let ob= brackets[0];
//   	let cb = brackets[1];

//  	// openBracketCount=obc closetBracketCount=cbc cbcLast=cbcjL
// 	let obc = 0;
// 	let cbc = 0;
// 	let cbcjL = 0;


//   	for ( let j = 0; j < nstr; j++ ) {
//   		if ( strM[j] == ob ) {
//   			obc += 1;
//   		};
//   		if ( strM[j] == cb ) {
//   			cbc += 1;
//   			cbcjL = j;
//   		};
//   	}; 

//   	let k = 0;

//   	for ( let j = 0; j < nstr; ) {
//   		if ( (strM[j] == brackets[0]) && (strM[cbcjL-j] == brackets[1]) ) {
//   			j++;
//   		} else if ( (strM[j] == brackets[0]) && (strM[cbcjL-j] != brackets[1]) ) {
//   			cb = strM[cbcjL-j];
//   			k = j;
//   			while (cb == strM[cbcjL-k) {
//   				cbc+=1;
//   				k++;
//   			};
//   			obc = cbc ;
//   			op = strM[cbcjl]
//   		}



//   	if ( (obc == cbc) && (cbc != 0) && (obc != 0) ) {
//   		trueOrFalce = true;
//   	} else {
//   		trueOrFalce = false;
//   		break;
//   	};

//   };

//   return (trueOrFalce);
// }
