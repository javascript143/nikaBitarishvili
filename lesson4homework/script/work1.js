//შექმენით პროგრამა, რომელიც ნებისმიერი 10 ელემენტისგან შემდგარი მასივიდან გამოიტანს ყოველ მესამე ელემენტს ეკრანზე. შეასრულეთ ეს დავალება ციკლების მეშვეობით.




let names = ["nika", "lasha", "gerisi", "sevasti", "mari", "gio", "beka", "levanfi", "mikael", "jansuli"];
{
    for (let count = 2; count <names.length; count = count +3)
    console.log(names[count] + " ")
}