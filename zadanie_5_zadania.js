let a=parseInt(prompt("Podaj liczbe: ","0"))
if (a<100 && a>9)
{
    document.write("Jest dwucyfrowa")
    if (a%2==0)
    {
        document.write("<br> Jest parzysta")
    }
}
else
{
    document.write("Nie jest dwucyfrowa")
}