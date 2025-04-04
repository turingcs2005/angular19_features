export class DateWrapper {
    constructor(private date: Date) {}

    // Method to assign argument d's date part to this, returning void 
    assignDate(d: Date): void {
        this.date.setFullYear(d.getFullYear());
        this.date.setMonth(d.getMonth());
        this.date.setDate(d.getDate());
    }
    // Method to assign argument d's time part to this, returning void
    assignTime(d: Date): void {
        this.date.setHours(d.getHours());
        this.date.setMinutes(d.getMinutes());
        this.date.setSeconds(d.getSeconds());
        this.date.setMilliseconds(d.getMilliseconds());
    }
    // Method to assign this's date part to argument d, returning void
    assignDateTo(d: Date): void {
        d.setFullYear(this.date.getFullYear());
        d.setMonth(this.date.getMonth());
        d.setDate(this.date.getDate());
    }
    // Method to assign this's time part to argument d, returning void
    assignTimeTo(d: Date): void {
        d.setHours(this.date.getHours());
        d.setMinutes(this.date.getMinutes());
        d.setSeconds(this.date.getSeconds());
        d.setMilliseconds(this.date.getMilliseconds());
    }
}