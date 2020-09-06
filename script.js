var count=1,i,win1=1,win2=1;
var span=document.getElementById("span");
var X=document.getElementById("X");
var O=document.getElementById("O");
function get(get)
{
			
	if(count<=9)
	{
	if(count%2!= 0)
	{
	document.getElementById(get.id).innerHTML="X";
	document.getElementById(get.id).style.color="blue";
	span.textContent="O";
	}
	else
	{
	document.getElementById(get.id).style.color="red";
	document.getElementById(get.id).innerHTML="O";
	span.textContent="X";
	}
	count++;
	}
	else{
		alert("DRAW MATCH");
		reset();
	}

	if(conditions())
	{
			if(count%2!=0)
			{
				O.textContent=win1;
				win1++;
				alert("Player O is Winner");
			}
			else
				{X.textContent=win2;
					win2++;
					alert("Player X is Winner");
				}
				reset();
	}
}
function conditions()
{
	if( check('box1','box2','box3') || check('box7','box8','box9') ||check("box4","box5","box6")||check('box1','box4','box7') ||check('box2','box5','box8') ||check('box3','box6','box9') ||check('box1','box5','box9') ||check('box3','box5','box7'))
	{
		return true;
	}
}
function reset()
{
	count=1;
	span.textContent="X";
	for(i=1;i<10;i++)
	{
	document.getElementById("box"+i).innerHTML="";
	}
}
function check(box1,box2,box3){
	if(result(box1)!="" && result(box2)!="" && result(box3)!="" &&result(box1)==result(box2) && result(box2)==result(box3)) 
	{
		return true;
	}
}

function result(result)
{
	return document.getElementById(result).textContent;
}