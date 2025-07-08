const popularBooks = [

  {
    id: 1,
    title: "It Ends With Us",
    author: "Colleen Hoover",
   genre: "Fiction",
    image: "https://genflix.in/cdn/shop/files/1_xgD23AbB5Mp0APZkhi-86w.jpg?v=1743898765",
    rating:"⭐⭐⭐⭐",
    description:"It Ends with Us is a romance novel by Colleen Hoover, published by Atria Books on August 2, 2016. The story follows florist Lily Bloom, whose abusive relationship with neurosurgeon Ryle Kincaid is compounded when her high school boyfriend Atlas Corrigan re-enters her life. It explores themes of domestic violence and emotional abuse. Based on the relationship between her mother and father, Hoover described it as the hardest book I ve ever written."
  },
  {
    id: 2,
    title: "The Psychology of Money",
    author: "Morgan Housel",
    genre: "NonFiction",
    image: "https://beyondhampers.com/cdn/shop/files/ThePsychologyofMoney.webp?v=1722951585&width=1946",
    rating:"⭐⭐⭐⭐⭐",
    description:"In the Psychology of Money, Morgan Housel teaches you how to have a better relationship with money and to make smarter financial decisions. Instead of pretending that humans are ROI-optimizing machines, he shows you how your psychology can work for and against you."
  },
   {
    id: 3,
    title: "Dune",
    author: "Frank Herbert",
    genre: "SciFi",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpF_cn7XPF5AZYHTudDHFHTl6_o2KnQRcPlg&s",
    rating:"⭐⭐⭐⭐",
    description:"In the far future, manipulation of the equations necessary for interstellar travel can only be accomplished through the aid of the narcotic “spice” or “melange,” which can only be found on one planet, Arrakis—also called Dune. The galaxy is divided into aristocratic houses under the leadership of the Padishah Emperor, Shaddam IV. Fearing the rise of House Atreides of the oceanic planet Caladan, Shaddam IV orders House Atreides to take over Arrakis and spice mining from their longtime enemies House Harkonnen but plans to help the Harkonnens destroy the Atreides after their arrival on Arrakis."
  },
 
     {
  id: 4,
  title: "Tintin",
  author: "Hergé",
  genre: "Comics",
  image: "https://m.media-amazon.com/images/M/MV5BNGMzZWU1MjktNjE3Zi00MjUxLWE0NTQtNGIyNzRhNGEwMGIzXkEyXkFqcGc@._V1_.jpg",
  rating:"⭐⭐⭐⭐⭐",
  description:"Tintin is a young Belgian reporter and adventurer who becomes involved in dangerous cases in which he takes heroic action to save the day. The Adventures may feature Tintin hard at work in his investigative journalism, but seldom is he seen actually turning in a story. Readers and critics have described Tintin as a well-rounded yet open-ended, intelligent, and creative character, noting that his lack of backstory and neutral personality permits a reflection of the evil, folly, and foolhardiness which surrounds him. The character never compromises his Boy Scout ideals, which represent Hergé's own, and his status allows the reader to assume his position within the story, rather than merely following the adventures of a strong protagonist.[36] Tintin's cartoonish representation against more realistic backgrounds enhances this aspect, with Scott McCloud noting that it allows readers to mask themselves in a character and safely enter a sensually stimulating world."
},
  
  {
    id: 5,
    title: "Ikigai",
    author: "Héctor García & Francesc Miralles",
     genre: "NonFiction",
    image: "https://champaca.in/cdn/shop/products/1_iA0nFw7o8AucT6E7JawtqA_300x300.jpg?v=1675499787",
    rating:"⭐⭐⭐",
    description:"In The Ikigai Journey, authors Hector Garcia and Francesc Miralles take their international bestseller Ikigai: The Japanese Secret to a Long and Happy Life a step further by showing you how to find your own ikigai through practical exercises, such as employing new habits and stepping outside your comfort zone."
  },
    {
    id: 6,
    title: "The Silent Patient",
    author: "Alex Michaelides",
    genre: "Thriller",
    image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1668782119i/40097951.jpg",
    rating:"⭐⭐⭐⭐",
    description:"Alicia Berenson’s life is seemingly perfect. A famous painter married to an in-demand fashion photographer, she lives in a grand house with big windows overlooking a park in one of London’s most desirable areas. One evening her husband Gabriel returns home late from a fashion shoot, and Alicia shoots him five times in the face, and then never speaks another word."
  },
  {
    id: 7,
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    genre: "NonFiction",
    image:"https://upload.wikimedia.org/wikipedia/en/c/c1/Thinking%2C_Fast_and_Slow.jpg",
    rating:"⭐⭐⭐⭐",
    description:"In the highly anticipated Thinking, Fast and Slow, Kahneman takes us on a groundbreaking tour of the mind and explains the two systems that drive the way we think. System 1 is fast, intuitive, and emotional; System 2 is slower, more deliberative, and more logical. Kahneman exposes the extraordinary capabilities—and also the faults and biases—of fast thinking, and reveals the pervasive influence of intuitive impressions on our thoughts and behavior. The impact of loss aversion and overconfidence on corporate strategies, the difficulties of predicting what will make us happy in the future, the challenges of properly framing risks at work and at home, the profound effect of cognitive biases on everything from playing the stock market to planning the next vacation—each of these can be understood only by knowing how the two systems work together to shape our judgments and decisions."
  },
  {
    id: 8,
    title: "Atomic Habits",
    author: "James Clear",
   author: "Daniel Kahneman",
    genre: "NonFiction",
    image: "https://www.oskareggert.com/content/images/size/w2000/2024/02/image_67203329.JPG",
    rating:"⭐⭐⭐⭐⭐",
    description:'Atomic Habits by James Clear is a comprehensive, practical guide on how to change your habits and get 1% better every day. Using a framework called the Four Laws of Behavior Change, Atomic Habits teaches readers a simple set of rules for creating good habits and breaking bad ones. Read the full summary to glean 3 key lessons from Atomic Habits, learn how to build a habit in 4 simple steps, and get a handy reference guide for the strategies recommended throughout the book.'
  },
  {
    id: 9,
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    image: "https://covers.openlibrary.org/b/id/7222246-L.jpg",
    rating:"⭐⭐⭐⭐⭐",
    description:"A masterpiece of rebellion and imprisonment where war is peace freedom is slavery and Big Brother is watching. Thought Police, Big Brother, Orwellian - these words have entered our vocabulary because of George Orwell's classic dystopian novel 1984. The story of one man's Nightmare Odyssey as he pursues a forbidden love affair through a world ruled by warring states and a power structure that controls not only information but also individual thought and memory 1984 is a prophetic haunting tale More relevant than ever before 1984 exposes the worst crimes imaginable the destruction of truth freedom and individuality. With a foreword by Thomas Pynchon. This beautiful paperback edition features deckled edges and french flaps a perfect gift for any occasion"
  },
  {
    id: 10,
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Fiction",
    image: "https://m.media-amazon.com/images/I/617lxveUjYL.jpg",
    rating:"⭐⭐⭐⭐⭐",
    description:"Paulo Coelho's masterpiece tells the mystical story of Santiago, an Andalusian shepherd boy who yearns to travel in search of a worldly treasure. His quest will lead him to riches far different—and far more satisfying—than he ever imagined. Santiago's journey teaches us about the essential wisdom of listening to our hearts, recognizing opportunity and learning to read the omens strewn along life's path, and, most importantly, following our dreams."
  },
  {
    id: 11,
    title: "Sapiens",
    author: "Yuval Noah Harari",
    genre: "NonFiction",
    image: "https://m.media-amazon.com/images/I/61i4k7DWNFL._UF1000,1000_QL80_.jpg",
    rating:"⭐⭐⭐⭐",
    description:"From a renowned historian comes a groundbreaking narrative of humanity’s creation and evolution—a #1 international bestseller—that explores the ways in which biology and history have defined us and enhanced our understanding of what it means to be “human.” One hundred thousand years ago, at least six different species of humans inhabited Earth. Yet today there is only one—homo sapiens. What happened to the others? And what may happen to us? Most books about the history of humanity pursue either a historical or a biological approach, but Dr. Yuval Noah Harari breaks the mold with this highly original book that begins about 70,000 years ago with the appearance of modern cognition. "
  },
   {
    id: 12,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Fiction",
    image:"https://upload.wikimedia.org/wikipedia/commons/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg",
    rating:"⭐⭐⭐",
    description:"The Great Gatsby, F. Scott Fitzgerald’s third book, stands as the supreme achievement of his career. First published in 1925, this quintessential novel of the Jazz Age has been acclaimed by generations of readers. The story of the mysteriously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan, of lavish parties on Long Island at a time when The New York Times noted “gin was the national drink and sex the national obsession,” it is an exquisitely crafted tale of America in the 1920s."
  },
  {
    id: 13,
    title: "The Seven Husbands of Evelyn Hugo",
    author: "Taylor Jenkins Reid",
    genre: "Fiction",
    image:"https://m.media-amazon.com/images/I/81PkmvwdbhL._UF1000,1000_QL80_.jpg",
    rating:"⭐⭐⭐⭐",
    description:"Aging and reclusive Hollywood movie icon Evelyn Hugo is finally ready to tell the truth about her glamorous and scandalous life. But when she chooses unknown magazine reporter Monique Grant for the job, no one is more astounded than Monique herself. Why her? Why now?Monique is not exactly on top of the world. Her husband has left her, and her professional life is going nowhere. Regardless of why Evelyn has selected her to write her biography, Monique is determined to use this opportunity to jumpstart her career."
  },
  {
    id: 14,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Classic",
    image: "https://m.media-amazon.com/images/I/81gepf1eMqL.jpg",
    rating:"⭐⭐⭐⭐",
    description:'A lawyer  advice to his children as he defends the real mockingbird of Harper Lee classic novel - a black man charged with the rape of a white girl. Through the young eyes of Scout and Jem Finch, Harper Lee explores with exuberant humour the irrationality of adult attitudes to race and class in the Deep South of the 1930s. The conscience of a town steeped in prejudice, violence and hypocrisy is pricked by the stamina of one man struggle for justice. But the weight of history will only tolerate so much.'
  },
  {
    id: 15,
    title: "Where the Crawdads Sing",
    author: "Delia Owens",
    genre: "Fiction",
    image:"https://bookclubb.in/wp-content/uploads/2023/09/Where-the-Crawdads-Sing.jpg",
    rating:"⭐⭐⭐",
    description:"Delia Owens is the co-author of three internationally bestselling nonfiction books about her life as a wildlife scientist in Africa—Cry of the Kalahari, The Eye of the Elephant, and Secrets of the Savanna. She has won the John Burroughs Award for Nature Writing and has been published in Nature, The African Journal of Ecology, and International Wildlife, among many others. She currently lives in Idaho, where she continues her support for the people and wildlife of Zambia. Where the Crawdads Sing is her first novel."
  },
  {
    id: 16,
    title: "Can't Hurt Me",
    author: "David Goggins",
    genre: "NonFiction",
    image:"https://m.media-amazon.com/images/I/81VpFFpZTtL._UF1000,1000_QL80_.jpg",
    rating:"⭐⭐⭐⭐",
    description:"In Where the Crawdads Sing, Owens juxtaposes an exquisite ode to the natural world against a profound coming of age story and haunting mystery. Thought-provoking, wise, and deeply moving, Owens’s debut novel reminds us that we are forever shaped by the child within us, while also subject to the beautiful and violent secrets that nature keeps."
  },
  {
    id: 17,
    title: "Foundation",
    author: "Isaac Asimov",
    genre: "SciFi",
    image:"https://www.asiabooks.com/media/catalog/product/cache/a5ac216be58c0cbce1cb04612ece96dc/f/o/foundation_trilogy.jpg",
    rating:"⭐⭐⭐⭐ ",
    description:'For twelve thousand years the Galactic Empire has ruled supreme. Now it is dying. But only Hari Seldon, creator of the revolutionary science of psychohistory, can see into the future--to a dark age of ignorance, barbarism, and warfare that will last thirty thousand years. To preserve knowledge and save humankind, Seldon gathers the best minds in the Empire--both scientists and scholars--and brings them to a bleak planet at the edge of the galaxy to serve as a beacon of hope for future generations. He calls his sanctuary the Foundation.'
  },
  {
    id: 18,
    title: "The Book Thief",
    author: "Markus Zusak",
    genre: "Fiction",
    image: "https://m.media-amazon.com/images/I/71H52+sSb4L._UF1000,1000_QL80_.jpg",
    rating:"⭐⭐⭐⭐",
    description:"It is 1939. Nazi Germany. The country is holding its breath. Death has never been busier, and will be busier still.By her brother's graveside, Liesel's life is changed when she picks up a single object, partially hidden in the snow. It is The Gravedigger's Handbook, left behind there by accident, and it is her first act of book thievery. So begins a love affair with books and words, as Liesel, with the help of her accordian-playing foster father, learns to read. Soon she is stealing books from Nazi book-burnings, the mayor's wife's library, wherever there are books to be found."

  },
  {
    id: 19,
    title: "Becoming",
    author: "Michelle Obama",
    genre: "Biography",
     rating:"⭐⭐⭐⭐",
    image: "https://images.blinkist.io/images/books/5bf79abb6cee070007caaf8b/1_1/470.jpg",
     description:"In a life filled with meaning and accomplishment, Michelle Obama has emerged as one of the most iconic and compelling women of our era. As First Lady of the United States of America—the first African American to serve in that role—she helped create the most welcoming and inclusive White House in history, while also establishing herself as a powerful advocate for women and girls in the U.S. and around the world, dramatically changing the ways that families pursue healthier and more active lives, and standing with her husband as he led America through some of its most harrowing moments. Along the way, she showed us a few dance moves, crushed Carpool Karaoke, and raised two down-to-earth daughters under an unforgiving media glare."
  
  
    },
  {
    id: 20,
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    genre: "Finance",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR0BOp7T4cs_Y9HfHnRBbu0vo-8Y936aZVCw&s",
    rating:"⭐⭐⭐⭐",
    description:"By her brother's graveside, Liesel's life is changed when she picks up a single object, partially hidden in the snow. It is The Gravedigger's Handbook, left behind there by accident, and it is her first act of book thievery. So begins a love affair with books and words, as Liesel, with the help of her accordian-playing foster father, learns to read. Soon she is stealing books from Nazi book-burnings, the mayor's wife's library, wherever there are books to be found."
  },
   {
    id: 21,
    title: "The Power of Habit",
    author: "Charles Duhigg",
    genre: "NonFiction",
    image:'https://i.ebayimg.com/images/g/RW0AAOSwNadkPs72/s-l400.png',
     rating:"⭐⭐⭐",
    description:"For decades, we’ve been told that positive thinking is the key to a happy, rich life. F**k positivity, Mark Manson says. Let’s be honest, shit is f**ked and we have to live with it. In his wildly popular Internet blog, Manson doesn’t sugarcoat or equivocate. He tells it like it is—a dose of raw, refreshing, honest truth that is sorely lacking today. The Subtle Art of Not Giving a F**k is his antidote to the coddling, lets-all-feel-good mindset that has infected American society and spoiled a generation, rewarding them with gold medals just for showing up."
  
  },
  {
    id: 22,
    title: "Project Hail Mary",
    author: "Andy Weir",
   genre: "Sci-Fi",
    image: "https://m.media-amazon.com/images/I/81zD9kaVW9L._UF1000,1000_QL80_.jpg",
     rating:"⭐⭐⭐⭐",
    description:"Lowen arrives at the Crawford home, ready to sort through years of Verity's notes and outlines, hoping to find enough material to get her started. What Lowen doesn't expect to uncover in the chaotic office is an unfinished autobiography Verity never intended for anyone to read. Page after page of bone-chilling admissions, including Verity's recollection of what really happened the day her daughter died."
 
  },
  {
    id: 23,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    image: "https://m.media-amazon.com/images/I/712cDO7d73L._UF1000,1000_QL80_.jpg",
    rating:"⭐⭐⭐",
       description:"Lowen arrives at the Crawford home, ready to sort through years of Verity's notes and outlines, hoping to find enough material to get her started. What Lowen doesn't expect to uncover in the chaotic office is an unfinished autobiography Verity never intended for anyone to read. Page after page of bone-chilling admissions, including Verity's recollection of what really happened the day her daughter died."

  },
  {
    id: 24,
    title: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
     genre: "NonFiction",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXOaDKQpkKWSu-NT3Hk_1Um5Tcbkxb1yRNpw&s",
    rating:"⭐⭐⭐",
    description:"For decades, we’ve been told that positive thinking is the key to a happy, rich life. F**k positivity, Mark Manson says. Let’s be honest, shit is f**ked and we have to live with it. In his wildly popular Internet blog, Manson doesn’t sugarcoat or equivocate. He tells it like it is—a dose of raw, refreshing, honest truth that is sorely lacking today. The Subtle Art of Not Giving a F**k is his antidote to the coddling, lets-all-feel-good mindset that has infected American society and spoiled a generation, rewarding them with gold medals just for showing up."
  
  
  },
 {
    id: 25,
    title: "Verity",
    author: "Colleen Hoover",
   genre: "Fiction",
    image: "https://cdn01.sapnaonline.com/product_media/9781408726600/md_9781408726600_080820241012645.jpg",
    rating:"⭐⭐⭐⭐",
    description:"Lowen arrives at the Crawford home, ready to sort through years of Verity's notes and outlines, hoping to find enough material to get her started. What Lowen doesn't expect to uncover in the chaotic office is an unfinished autobiography Verity never intended for anyone to read. Page after page of bone-chilling admissions, including Verity's recollection of what really happened the day her daughter died."
 
  },
 {
    id: 26,
    title: "Neuromancer",
    author: "William Gibson",
    genre: "SciFi",
    image:"https://m.media-amazon.com/images/I/81m-rJnUdRL.jpg",
    rating:"⭐⭐⭐",
    description:"Henry Dorsett Case was the sharpest data-thief in the business, until vengeful former employees crippled his nervous system. But now a new and very mysterious employer recruits him for a last-chance run. The target: an unthinkably powerful artificial intelligence orbiting Earth in service of the sinister Tessier-Ashpool business clan. With a dead man riding shotgun and Molly, mirror-eyed street-samurai, to watch his back, Case embarks on an adventure that ups the ante on an entire genre of fiction."
  },
{
    id: 27,
    title: "Educated",
    author: "Tara Westover",
    genre: "NonFiction",
    image:"https://upload.wikimedia.org/wikipedia/en/1/1f/Educated_%28Tara_Westover%29.png",
    rating:"⭐⭐⭐⭐⭐",
    description:"Tara Westover was 17 the first time she set foot in a classroom. Born to survivalists in the mountains of Idaho, she prepared for the end of the world by stockpiling home-canned peaches and sleeping with her  head-for-the-hills bag. In the summer she stewed herbs for her mother, a midwife and healer, and in the winter she salvaged in her father's junkyard.Her father forbade hospitals, so Tara never saw a doctor or nurse. Gashes and concussions, even burns from explosions, were all treated at home with herbalism. The family was so isolated from mainstream society that there was no one to ensure the children received an education and no one to intervene when one of Tara's older brothers became violent."
  },
  {
    id: 28,
    title: "Ender's Game",
    author: "Orson Scott Card",
    genre: "SciFi",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPi8VS_QRnSc1xH3hKUfKSZen6Tn-wOHFyeA&s",
    rating:"⭐⭐⭐",
    description:"Andrew Ender  Wiggin thinks he is playing computer simulated war games; he is, in fact, engaged in something far more desperate. The result of genetic experimentation, Ender may be the military genius Earth desperately needs in a war against an alien enemy seeking to destroy all human life. The only way to find out is to throw Ender into ever harsher training, to chip away and find the diamond inside, or destroy him utterly. Ender Wiggin is six years old when it begins. He will grow up fast.But Ender is not the only result of the experiment. The war with the Buggers has been raging for a hundred years, and the quest for the perfect general has been underway almost as long. Ender's two older siblings, Peter and Valentine, are every bit as unusual as he is, but in very different ways."
  },
  {
  id: 29,
  title: "The Maid",
  author: "Nita Prose",
  genre: "Fiction",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPiqBue-UkWM9chaZIJslcxJMNMtUzeiJwHg&s",
  rating:"⭐⭐⭐⭐",
      description:"Molly Gray is not like everyone else. She struggles with social skills and misreads the intentions of others. Her gran used to interpret the world for her, codifying it into simple rules that Molly could live by.Since Gran died a few months ago, twenty-five-year-old Molly has been navigating life's complexities all by herself. No matter—she throws herself with gusto into her work as a hotel maid. Her unique character, along with her obsessive love of cleaning and proper etiquette, make her an ideal fit for the job. She delights in donning her crisp uniform each morning, stocking her cart with miniature soaps and bottles, and returning guest rooms at the Regency Grand Hotel to a state of perfection. "

},

  {
    id: 30,
    title: "The Martian",
    author: "Andy Weir",
    genre: "SciFi",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtQ538mxIFMMFBNe9Sxg1DPIqmNMk3V6J6rH1JZKRBW5fM1uLj7sj1KfwNFq3wLYbNLbU&usqp=CAU",
    rating:"⭐⭐⭐⭐⭐",
    description:""
  },
  {
    id: 31,
    title: "Heartstopper",
    author: "Alice Oseman",
    genre: "Comics",
    image: "https://aliceoseman.com/wp-content/uploads/2022/04/9781444968392-1-scaled.jpg",
    rating:"⭐⭐⭐⭐⭐",
    description:"Heartstopper, written by Alice Oseman, is a heartwarming LGBTQ+ graphic novel series that follows the blossoming relationship between Charlie Spring, a high school student, and Nick Nelson, a rugby player. The story explores themes of love, friendship, self-discovery, and overcoming challenges like bullying and homophobia, all while maintaining an optimistic and joyful tone. "
  },

  
  {
    id: 32,
    title: "A Court of Thorns and Roses",
    author: "Sarah J. Maas",
    genre: "Fantasy",
    image: "https://m.media-amazon.com/images/I/81k3bgJ2EhL._UF1000,1000_QL80_.jpg",
    rating:"⭐⭐⭐⭐",
    description:'When nineteen-year-old huntress Feyre kills a wolf in the woods, a terrifying creature arrives to demand retribution. Dragged to a treacherous magical land she knows about only from legends, Feyre discovers that her captor is not truly a beast, but one of the lethal, immortal faeries who once ruled her world.'
  },
  {
  id: 33,
  title: "The Midnight Library",
  author: "Matt Haig",
  genre: "Fiction",
  image: "https://m.media-amazon.com/images/I/71aiTCR69YS._UF894,1000_QL80_.jpg",
  rating:"⭐⭐⭐⭐⭐",
  description:"When Nora Seed finds herself in the Midnight Library, she has a chance to make things right. Up until now, her life has been full of misery and regret. She feels she has let everyone down, including herself. But things are about to change. The books in the Midnight Library enable Nora to live as if she had done things differently. With the help of an old friend, she can now undo every one of her regrets as she tries to work out her perfect life. But things aren't always what she imagined they'd be, and soon her choices place the library and herself in extreme danger."

},
{
    id: 34,
    title: "Brave New World",
    author: "Aldous Huxley",
    genre: "SciFi",
    image:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/hostedimages/1580425803i/28875910.jpg",
    rating:"⭐⭐⭐⭐",
    description:"Aldous Huxley's profoundly important classic of world literature, Brave New World is a searching vision of an unequal, technologically-advanced future where humans are genetically bred, socially indoctrinated, and pharmaceutically anesthetized to passively uphold an authoritarian ruling order–all at the cost of our freedom, full humanity, and perhaps also our souls. “A genius [who] who spent his life decrying the onward march of the Machine” (The New Yorker), Huxley was a man of incomparable talents: equally an artist, a spiritual seeker, and one of history’s keenest observers of human nature and civilization. Brave New World, his masterpiece, has enthralled and terrified millions of readers, and retains its urgent relevance to this day as both a warning to be heeded as we head into tomorrow and as thought-provoking, satisfying work of literature. "
  },
  {
    id: 35,
    title: "Asterix and the Golden Sickle",
    author: "René Goscinny & Albert Uderzo",
    genre: "Comics",
    image: "https://www.pastcart.com/wp-content/uploads/2021/05/Document-133_34.webp",
    rating:"⭐⭐⭐⭐",
    description:"Asterix and the Golden Sickle also known as The Golden Billhook- translated from French: La Serpe D'or) is a French comic story, written by René Goscinny and illustrated by Albert Uderzo.[1] It is the second story in the Asterix comic book series, and was originally published by Dargaud as a serial for Pilote magazine in 1960,[2] before being later being published as a comic album in 1962."

  },
  {
    id: 36,
    title: "Archie: The New Riverdale",
    author: "Mark Waid",
    genre: "Comics",
    image: "https://cdn2.penguin.com.au/covers/original/9781682559727.jpg",
    rting:"⭐⭐⭐⭐⭐",
    description:"Archie (also known as Archie Comics) is a comic book series (published from 1942 through 2020 in two volumes) featuring the Archie Comics character Archie Andrews. The character first appeared in Pep Comics #22 (cover dated December 1941). Archie proved to be popular enough to warrant his own self-titled ongoing comic book series which began publication in the winter of 1942. The last issue of the first series was published in June 2015."
  },
  {
    id: 37,
    title: "Snow Crash",
    author: "Neal Stephenson",
    genre: "SciFi",
    image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1589842551i/40651883.jpg",
    rating:"⭐⭐⭐⭐⭐",
    description:"n reality, Hiro Protagonist delivers pizza for Uncle Enzo's CosoNostra Pizza Inc., but in the Metaverse he's a warrior prince. Plunging headlong into the enigma of a new computer virus that's striking down hackers everywhere, he races along the neon-lit streets on a search-and-destroy mission for the shadowy virtual villain threatening to bring about infocalypse. Snow Crash is a mind-altering romp through a future America so bizarre, so outrageous . . . you'll recognize it immediately."
  },
  {
    id: 38,
    title: "Garfield at Large",
    author: "Jim Davis",
    genre: "Comics",
    image: "https://images.penguinrandomhouse.com/cover/9780345536891",
    rating:"⭐⭐⭐⭐",
    description:"Like every great lasagna, Garfield was born in the kitchen of an Italian restaurant on a winter's night in 1978, while outside snow fell like grated Parmesan cheese. He weighed five pounds, six ounces at birth—that's big for a kitten!—and right from the start showed a passion for Italian food. The restaurant owner, forced to choose between Garfield and closing his doors for lack of pasta, sold Garfield to a pet store. Garfield thought he was a goner until Jon Arbuckle walked in the door."
  },
  {
    id: 39,
    title: "Calvin and Hobbes",
    author: "Bill Watterson",
    genre: "Comics",
    image: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9780836220889/calvin-and-hobbes-9780836220889_hr.jpg",
    rating:"⭐⭐⭐⭐⭐",
    description:"Calvin and Hobbes follows the humorous antics of the title characters: Calvin, a mischievous and adventurous six-year-old boy; and his friend Hobbes, a sardonic tiger. Set in the suburban United States of the 1980s and 1990s, the strip depicts Calvin's frequent flights of fancy and friendship with Hobbes. It also examines Calvin's relationships with his long-suffering parents and with his classmates, especially his neighbor Susie Derkins."
  },
  {
    id: 40,
    title: "The Left Hand of Darkness",
    author: "Ursula K. Le Guin",
    genre: "SciFi",
    image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1653646992i/61174919.jpg",
    rating:"⭐⭐⭐⭐",
    description:" groundbreaking work of science fiction, The Left Hand of Darkness tells the story of a lone human emissary to Winter, an alien world whose inhabitants spend most of their time without a gender. His goal is to facilitate Winter's inclusion in a growing intergalactic civilization. But to do so he must bridge the gulf between his own views and those of the completely dissimilar culture that he encounters."
  }
];

export default popularBooks;