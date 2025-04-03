import { MatTimepickerOption } from "@angular/material/timepicker";

function padZero(num: number): string {
    return num < 10 ? '0' + num : num.toString();
}

export function generateTimeOptions(): MatTimepickerOption<Date>[] {

    const options: MatTimepickerOption<Date>[] = [];
    const startTime = new Date();
    startTime.setHours(6, 0, 0, 0); // 6:00 AM
    const endTime = new Date();
    endTime.setHours(20, 0, 0, 0); // 8:00 PM
  
    while (startTime <= endTime) {
      const timeString = startTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      options.push({
        label: timeString,
        value: new Date(startTime)
      });
      startTime.setMinutes(startTime.getMinutes() + 15); // Increment by 15 minutes
  
    }
  
    return options;

}
  