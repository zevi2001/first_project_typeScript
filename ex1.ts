// Step 1: נתון לכם אינאם - אתם רשאים להפוך אותו למשהו אחר
export enum ItemType {
  Book = 'book',
  DVD = 'dvd',
}

// Step 2:  ספר צריך להכיל שדות
interface Book {
type:ItemType.Book;
 title:string;
 author:string;
}
interface DVD {
type:ItemType.DVD
title:string;
duration:number;
}

// Test data
const libraryItems: (Book | DVD)[] = [
  { type: ItemType.Book, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
  { type: ItemType.DVD, title: 'Inception', duration: 148 },
  { type: ItemType.Book, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
  { type: ItemType.DVD, title: 'Avatar', duration: 162 },
  { type: ItemType.Book, title: 'Go Set a Watchman', author: 'Harper Lee' },
];

// Step 3: פונקציה מקבלת מערך של פריטים, ופונקצית פילטור. ומחזירה מערך מפולטר של פריטים
function filterItems<T>(items: T[], filterFn: (item: T) => boolean): T[] {
  const newArray: T[] = items.filter((item) => filterFn(item));
  return newArray;
}

// Step 4: הפונקציה מקבלת מערך של פריטים ומדפיסה את כל המידע הרלוונטי לגבי כל פריט
function printItemsData<T extends Book | DVD>(items: T[]) {
  for (const item of items) {
    console.log("ggg")
    if (item.type === ItemType.Book) {
      console.log(`Book - Title: ${item.title}, Author: ${item.author}`);
    } else if (item.type === ItemType.DVD) {
      console.log(`DVD - Title: ${item.title}, Duration: ${item.duration}`);
    }
  }
}
printItemsData(libraryItems)



// Step 5:  הדפיסו את כל המידע הנתון 

// Step 6: ממשו את פונקצית הפילטור כך שתחזיר סרטים ארוכים משעתיים והדפיסו את המערך 

// Step 7:  Harper Lee ממשו את פונקצית הפילטור כך שתחזיר רק ספרים של  