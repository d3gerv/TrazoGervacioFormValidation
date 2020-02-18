function comparepass()
{
    var pass = document.getElementById('pass').value;
    var conpass = document.getElementById('cpass').value;
    
        
        if (conpass !== pass)
        {
                document.getElementById('epass').innerHTML = 'Passwords do not match';
                document.getElementById("cpass").style.backgroundColor= "#FFCCCB";
        }
        else
        {
                document.getElementById('epass').innerHTML = 'Passwords Match';
                document.getElementById("cpass").style.backgroundColor="#90EE90";
                
        }
}
function regclick()
{
    var pass = document.getElementById('pass').value;
    var conpass = document.getElementById('cpass').value;
    if (conpass !== pass)
    {
        alert("Passwords do not match");
    }
    else
    {
        alert("Registration is complete");
            
    }

}