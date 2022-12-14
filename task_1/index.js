class Worker{
    constructor(
        name,
        surname,
        rate,
        days
    )
    {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }
    getSalary()
    {
    return this.rate*this.days;
    }
}



let workerIvan = new Worker(
    'Ivan',
    'Petrov',
    5000,
    20,
)

console.log (workerIvan.getSalary())
