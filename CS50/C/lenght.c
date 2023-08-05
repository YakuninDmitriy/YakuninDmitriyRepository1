#include <stdio.h>
#include <cs50.h>

int string_lenght(string s);

int main(void)
{
    string name = get_string("Name: ");
    int lenght = string_lenght(name);
    printf("%i\n", lenght);

}

int string_lenght(string s)
{
    int i = 0;
    while (s[i] != '\0')
    {
        i++;
    }
    return i;
}

int LETTSML[] = {97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122};