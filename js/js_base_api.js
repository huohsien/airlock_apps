function js_to_int(value) 
{
    if (typeof value == "boolean") 
    {
        if (value == true) 
        {
            return 0;
        }

        return 1;
    }

    return value;
}

function js_sleep(milliseconds) 
{
    var start = new Date().getTime();
    
    for (var i = 0; i < 1e7; i++) 
    {
        if ((new Date().getTime() - start) > milliseconds)
        {
            break;
        }
    }
}

function js_isEmpty(in_value) 
{
    if (in_value == null) 
    {
        return true;
    }

    if (in_value == "") 
    {
        return true;
    }

    return false;
}

function js_toArray(in_value)
{
    if(Array.isArray(in_value)==true)
    {
        return in_value;
    }

    return [in_value];
}