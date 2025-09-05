export function estimateTargetDate(startDate, daysToReach) {
    let currentDate = new Date(startDate);
    let daysCounted = 0;

    while (daysCounted < daysToReach) {
        currentDate.setDate(currentDate.getDate() + 1);
        // Check if the current date is a weekend (Saturday or Sunday)
        if (currentDate.getDay() !== 0 && currentDate.getDay() !== 6) {
            daysCounted++;
        }
    }

    return currentDate;
}