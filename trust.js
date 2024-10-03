function Datacollection() {
    let name = prompt("Holla, you're warmly welcome. What's your name?");
    let gender = prompt("what's your gender?");
    let year = prompt("what year were you born?");
    let age = 2024 - year;
    let days = year * 365;

    alert("Holla.." + name + " you are " + " a " + gender + ", you are " + age + " years old " + " and walked " + days + " days on this earth ");

}