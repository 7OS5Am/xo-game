let titel = document.querySelector('.titel');
let turn = 'x';
let squares = [];

function test(num1,num2,num3){
    titel.innerHTML = `${squares[num1]} winner`;
   document.getElementById('item'+num1).style.background = '#090';
   document.getElementById('item'+num2).style.background = '#090';
   document.getElementById('item'+num3).style.background = '#090';
   setInterval(function(){
    titel.innerHTML +='.'
   },1000)
   setTimeout(function(){
    location.reload()
   },4000)
  
}

function winner()
{
    for(let i = 1 ; i < 10 ; i++)
    {
       squares[i] = document.getElementById('item' +i).innerHTML;
    }
    if(squares[1] ==  squares[2] && squares[2]== squares[3] && squares[2]!= ''){
       test(1,2,3)
    }
    else if(squares[4]==  squares[5]&& squares[5]== squares[6] && squares[5]!= ''){
        test(4,5,6)
    }
    else if(squares[7]==  squares[8]&& squares[8]== squares[9]&& squares[9]!= ''){
        test(7,8,9)
    }
    else if(squares[1]==  squares[4]&& squares[4]== squares[7]&& squares[4]!= ''){
        test(1,4,7)
    }
    else if(squares[2]==  squares[5]&& squares[5]== squares[8]&& squares[2]!= ''){
        test(2,5,8)
    }
    else if(squares[3]==  squares[6]&& squares[6]== squares[9]&& squares[6]!= ''){
        test(3,6,9)
    }
    else if(squares[1]==  squares[5]&& squares[5]== squares[9]&& squares[1]!= ''){
        test(1,5,9)
    }
    else if(squares[3]==  squares[5]&& squares[5]== squares[7]&& squares[3]!= ''){
        test(3,5,7)
    }

}


function game(id)
{
    let element = document.getElementById(id);

    if(turn === 'x' && element.innerHTML == '' )
    {
        element.innerHTML = 'x';
        turn = 'o';
        titel.innerHTML= 'o';
        titel.style.color = "#fa0";
        element.style.background='#000';
    }
    else if(turn === 'o' && element.innerHTML == '')
    {
        element.innerHTML = 'o';
        turn ='x';
         titel.innerHTML= 'x';
          titel.style.color = "#fa0";
          element.style.background='#000';
    }
    winner()
}