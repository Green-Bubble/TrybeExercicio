class Data {
    private _day: number;
    private _month: number;
    private _year: number;

    constructor(day: number, month: number, year: number) {

        if (!Data.validateDate(day, month, year)) {
            this._day = 1;
            this._month = 1;
            this._year = 1900;
        } else {
            this._day = day;
            this._month = month;
            this._year = year;
        }
    }

    get day(): number {
        return this._day;
    }

    set day(value: number) {
        this._day = value;
    }

    get month(): number {
        return this._month;
    }

    set month(value: number) {
        this._month = value;
    }

    get year(): number {
        return this._year;
    }

    set year(value: number) {
        this._year = value;
    }

    getMonthName(): string {
        const months = [
            'janeiro',
            'fevereiro',
            'março',
            'abril',
            'maio',
            'junho',
            'julho',
            'agosto',
            'setembro',
            'outubro',
            'novembro',
            'dezembro',
        ];
    
        return months[this.month - 1];
    }

    isLeapYear(): boolean {
        return this._year % 4 === 0;
    }

    compare(date: Data): number {
        const currentDateStr = `${this.year}-${this.month}-${this.day}`;

        const dateStr = `${date.year}-${date.month}-${date.day}`;

        if (new Date(currentDateStr) > new Date(dateStr)) return 1;
        if (new Date(currentDateStr) < new Date(dateStr)) return -1;

        return 0;
    }
}