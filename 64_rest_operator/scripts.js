

function printNames (...names) {
    for (i = 0 ; i < names.length ; i++){
        console.log(names[i]);
    }
}

printNames('Will', 'Josh', 'Mariah');

printNames('Will', 'Josh', 'Mariah', 'John', 'Albert', 'Paul');