let players = [
    {
        "name": "Mohammad Nabi",
        "team": "Afghanistan",
        "format": "ODI and T20I",
        "playerType": "Allrounder",
        "basePrice": 50
    },
    {
        "name": "Ashton Agar",
        "team": "Australia",
        "format": "Test,ODI and T20I",
        "playerType": "Allrounder",
        "basePrice": 100
    },
    {
        "name": "Cameron Green",
        "team": "Australia",
        "format": "Test,ODI and T20I",
        "playerType": "Allrounder",
        "basePrice": 100
    },
    {
        "name": "Glenn Maxwell",
        "team": "Australia",
        "format": "ODI and T20I",
        "playerType": "Allrounder",
        "basePrice": 200
    },
    {
        "name": "Marcus Stoinis",
        "team": "Australia",
        "format": "ODI and T20I",
        "playerType": "Allrounder",
        "basePrice": 100
    },
    {
        "name": "Mitchell Marsh",
        "team": "Australia",
        "format": "Test,ODI and T20I",
        "playerType": "Allrounder",
        "basePrice": 200
    },
    {
        "name": "Travis Head",
        "team": "Australia",
        "format": "Test,ODI and T20I",
        "playerType": "Allrounder",
        "basePrice": 150
    },
    {
        "name": "Shakib al Hasan",
        "team": "Bangladesh",
        "format": "Test,ODI and T20I",
        "playerType": "Allrounder",
        "basePrice": 200
    },
    {
        "name": "Ben Stokes",
        "team": "England",
        "format": "Test",
        "playerType": "Allrounder",
        "basePrice": 200
    },
    {
        "name": "Chris Woakes",
        "team": "England",
        "format": "Test,ODI and T20I",
        "playerType": "Allrounder",
        "basePrice": 100
    },
    {
        "name": "Liam Livingstone",
        "team": "England",
        "format": "ODI and T20I",
        "playerType": "Allrounder",
        "basePrice": 100
    },
    {
        "name": "Moeen Ali",
        "team": "England",
        "format": "T20I",
        "playerType": "Allrounder",
        "basePrice": 150
    },
    {
        "name": "Sam Curran",
        "team": "England",
        "format": "Test,ODI and T20I",
        "playerType": "Allrounder",
        "basePrice": 100
    },
    {
        "name": "Deepak Hooda",
        "team": "India",
        "format": "ODI and T20I",
        "playerType": "Allrounder",
        "basePrice": 50
    },
    {
        "name": "Hardik Pandya",
        "team": "India",
        "format": "Test,ODI and T20I",
        "playerType": "Allrounder",
        "basePrice": 200
    },
    {
        "name": "Krunal Pandya",
        "team": "India",
        "format": "T20I",
        "playerType": "Allrounder",
        "basePrice": 50
    },
    {
        "name": "Ravindra Jadeja",
        "team": "India",
        "format": "Test,ODI and T20I",
        "playerType": "Allrounder",
        "basePrice": 200
    },
    {
        "name": "Shardul Thakur",
        "team": "India",
        "format": "Test,ODI and T20I",
        "playerType": "Allrounder",
        "basePrice": 100
    },
    {
        "name": "Shivam Dube",
        "team": "India",
        "format": "ODI and T20I",
        "playerType": "Allrounder",
        "basePrice": 20
    },
    {
        "name": "Venkatesh Iyer",
        "team": "India",
        "format": "T20I",
        "playerType": "Allrounder",
        "basePrice": 20
    },
    {
        "name": "Washington Sundar",
        "team": "India",
        "format": "Test and T20I",
        "playerType": "Allrounder",
        "basePrice": 50
    },
    {
        "name": "Daryl Mitchell",
        "team": "New Zealand",
        "format": "Test, ODI and T20I",
        "playerType": "Allrounder",
        "basePrice": 150
    },
    {
        "name": "Glenn Philips",
        "team": "New Zealand",
        "format": "Test, OdI and T20I",
        "playerType": "Allrounder",
        "basePrice": 100
    },
    {
        "name": "James Neesham",
        "team": "New Zealand",
        "format": "ODI and T20I",
        "playerType": "Allrounder",
        "basePrice": 100
    },
    {
        "name": "Mohammad Nawaz",
        "team": "Pakistan",
        "format": "ODI and T20I",
        "playerType": "Allrounder",
        "basePrice": 100
    },
    {
        "name": "Shadab Khan",
        "team": "Pakistan",
        "format": "ODI and T20I",
        "playerType": "Allrounder",
        "basePrice": 100
    },
    {
        "name": "Aiden Markram",
        "team": "South Africa",
        "format": "Test,ODI and T20I",
        "playerType": "Allrounder",
        "basePrice": 200
    },
    {
        "name": "Marco Jansen",
        "team": "South Africa",
        "format": "Test,ODI and T20I",
        "playerType": "Allrounder",
        "basePrice": 100
    },
    {
        "name": "Angelo Mathews",
        "team": "Srilanka",
        "format": "Test,ODI and T20I",
        "playerType": "Allrounder",
        "basePrice": 100
    },
    {
        "name": "Dasun Shanaka",
        "team": "Srilanka",
        "format": "ODI and T20I",
        "playerType": "Allrounder",
        "basePrice": 50
    },
    {
        "name": "Andre Russell",
        "team": "West Indies",
        "format": "ODI and T20I",
        "playerType": "Allrounder",
        "basePrice": 150
    },
    {
        "name": "Jason Holder",
        "team": "West Indies",
        "format": "Test,ODI and T20I",
        "playerType": "Allrounder",
        "basePrice": 100
    },
    {
        "name": "Kyle Mayers",
        "team": "West Indies",
        "format": "ODI and T20I",
        "playerType": "Allrounder",
        "basePrice": 50
    },
    {
        "name": "Rowman Powell",
        "team": "West Indies",
        "format": "ODI and T20I",
        "playerType": "Allrounder",
        "basePrice": 50
    },
    {
        "name": "Sunil Narine",
        "team": "West Indies",
        "format": "ODI and T20I",
        "playerType": "Allrounder",
        "basePrice": 200
    },
    {
        "name": "Chris Lynn",
        "team": "Australia",
        "format": "T20I",
        "playerType": "Batsmen",
        "basePrice": 20
    },
    {
        "name": "David Warner",
        "team": "Australia",
        "format": "Test,ODI and T20I",
        "playerType": "Batsmen",
        "basePrice": 200
    },
    {
        "name": "Marnus Labuschagne",
        "team": "Australia",
        "format": "Test and ODI",
        "playerType": "Batsmen",
        "basePrice": 150
    },
    {
        "name": "Steven Smith",
        "team": "Australia",
        "format": "Test,ODI and T20I",
        "playerType": "Batsmen",
        "basePrice": 200
    },
    {
        "name": "Usman Khawaja",
        "team": "Australia",
        "format": "Test, and ODI",
        "playerType": "Batsmen",
        "basePrice": 100
    },
    {
        "name": "Alex Hales",
        "team": "England",
        "format": "ODI and T20I",
        "playerType": "Batsmen",
        "basePrice": 50
    },
    {
        "name": "David Malan",
        "team": "England",
        "format": "Test,ODI and T20I",
        "playerType": "Batsmen",
        "basePrice": 150
    },
    {
        "name": "Harry Brook",
        "team": "England",
        "format": "Test,ODI and T20I",
        "playerType": "Batsmen",
        "basePrice": 150
    },
    {
        "name": "Jason Roy",
        "team": "England",
        "format": "ODI and T20I",
        "playerType": "Batsmen",
        "basePrice": 150
    },
    {
        "name": "Joe Root",
        "team": "England",
        "format": "Test and ODI",
        "playerType": "Batsmen",
        "basePrice": 200
    },
    {
        "name": "Phil Salt",
        "team": "England",
        "format": "ODI and T20I",
        "playerType": "Batsmen",
        "basePrice": 50
    },
    {
        "name": "Ajinkya Rahane",
        "team": "India",
        "format": "Test",
        "playerType": "Batsmen",
        "basePrice": 100
    },
    {
        "name": "Cheteshwar Pujara",
        "team": "India",
        "format": "Test",
        "playerType": "Batsmen",
        "basePrice": 150
    },
    {
        "name": "Devdutt Padikkal",
        "team": "India",
        "format": "T20I",
        "playerType": "Batsmen",
        "basePrice": 50
    },
    {
        "name": "KL Rahul",
        "team": "India",
        "format": "Test,ODI and T20I",
        "playerType": "Batsmen",
        "basePrice": 200
    },
    {
        "name": "Manish Pandey",
        "team": "India",
        "format": "ODI",
        "playerType": "Batsmen",
        "basePrice": 20
    },
    {
        "name": "Mayank Agarwal",
        "team": "India",
        "format": "Test",
        "playerType": "Batsmen",
        "basePrice": 50
    },
    {
        "name": "Nitish Rana",
        "team": "India",
        "format": "T20I",
        "playerType": "Batsmen",
        "basePrice": 20
    },
    {
        "name": "Prithvi Shaw",
        "team": "India",
        "format": "Test and T20I",
        "playerType": "Batsmen",
        "basePrice": 50
    },
    {
        "name": "Rahul Tripati",
        "team": "India",
        "format": "T20I",
        "playerType": "Batsmen",
        "basePrice": 20
    },
    {
        "name": "Rajat Patidar",
        "team": "India",
        "format": "T20I",
        "playerType": "Batsmen",
        "basePrice": 20
    },
    {
        "name": "Rinku Singh",
        "team": "India",
        "format": "ODI and T20I",
        "playerType": "Batsmen",
        "basePrice": 50
    },
    {
        "name": "Rohit Sharma",
        "team": "India",
        "format": "Test,ODI and T20I",
        "playerType": "Batsmen",
        "basePrice": 200
    },
    {
        "name": "Ruturaj Gaikwad",
        "team": "India",
        "format": "ODI and T20I",
        "playerType": "Batsmen",
        "basePrice": 100
    },
    {
        "name": "Sheryas Iyer",
        "team": "India",
        "format": "Test,ODI and T20I",
        "playerType": "Batsmen",
        "basePrice": 200
    },
    {
        "name": "Shikar Dhawan",
        "team": "India",
        "format": "ODI and T20I",
        "playerType": "Batsmen",
        "basePrice": 150
    },
    {
        "name": "Shubman Gill",
        "team": "India",
        "format": "Test,ODI and T20I",
        "playerType": "Batsmen",
        "basePrice": 200
    },
    {
        "name": "Surya Kumar Yadav",
        "team": "India",
        "format": "ODI and T20I",
        "playerType": "Batsmen",
        "basePrice": 150
    },
    {
        "name": "Tilak Varma",
        "team": "India",
        "format": "ODI and T20I",
        "playerType": "Batsmen",
        "basePrice": 50
    },
    {
        "name": "Virat Kohli",
        "team": "India",
        "format": "Test,ODI and T20I",
        "playerType": "Batsmen",
        "basePrice": 200
    },
    {
        "name": "Yashaswi Jaiswal",
        "team": "India",
        "format": "Test and T20I",
        "playerType": "Batsmen",
        "basePrice": 50
    },
    {
        "name": "Devon Conway",
        "team": "New Zealand",
        "format": "Test,ODI and T20I",
        "playerType": "Batsmen",
        "basePrice": 150
    },
    {
        "name": "Henry Nicholls",
        "team": "New Zealand",
        "format": "Test and ODI",
        "playerType": "Batsmen",
        "basePrice": 100
    },
    {
        "name": "Kane Williamson",
        "team": "New Zealand",
        "format": "Test,ODI and T20I",
        "playerType": "Batsmen",
        "basePrice": 200
    },
    {
        "name": "Mark Chapman",
        "team": "New Zealand",
        "format": "ODI and T20I",
        "playerType": "Batsmen",
        "basePrice": 50
    },
    {
        "name": "Rachin Ravindra",
        "team": "New Zealand",
        "format": "Test, ODI and T20I",
        "playerType": "Batsmen",
        "basePrice": 100
    },
    {
        "name": "Babar Azam",
        "team": "Pakistan",
        "format": "Test,ODI and T20I",
        "playerType": "Batsmen",
        "basePrice": 200
    },
    {
        "name": "Fakhar Zaman",
        "team": "Pakistan",
        "format": "ODI and T20I",
        "playerType": "Batsmen",
        "basePrice": 150
    },
    {
        "name": "David Miller",
        "team": "South Africa",
        "format": "ODI and T20I",
        "playerType": "Batsmen",
        "basePrice": 150
    },
    {
        "name": "Dean Elgar",
        "team": "South Africa",
        "format": "Test",
        "playerType": "Batsmen",
        "basePrice": 50
    },
    {
        "name": "Dewald Brevis",
        "team": "South Africa",
        "format": "T20I",
        "playerType": "Batsmen",
        "basePrice": 20
    },
    {
        "name": "Faf du Plessis*",
        "team": "South Africa",
        "format": "Test,ODI and T20I",
        "playerType": "Batsmen",
        "basePrice": 200
    },
    {
        "name": "Timba Bavuma",
        "team": "South Africa",
        "format": "Test,ODI and T20I",
        "playerType": "Batsmen",
        "basePrice": 100
    },
    {
        "name": "Van der Dussen",
        "team": "South Africa",
        "format": "Test,ODI and T20I",
        "playerType": "Batsmen",
        "basePrice": 100
    },
    {
        "name": "Banuka Rajapaksa",
        "team": "Srilanka",
        "format": "ODI and T20I",
        "playerType": "Batsmen",
        "basePrice": 50
    },
    {
        "name": "Evin Lewis",
        "team": "West Indies",
        "format": "ODI and T20I",
        "playerType": "Batsmen",
        "basePrice": 50
    },
    {
        "name": "Shimron Hetmyer",
        "team": "West Indies",
        "format": "ODI and T20I",
        "playerType": "Batsmen",
        "basePrice": 50
    },
    {
        "name": "Fazalhaq Farooqi",
        "team": "Afghanistan",
        "format": "ODI and T20I",
        "playerType": "Seam",
        "basePrice": 50
    },
    {
        "name": "Naveen ul Haq",
        "team": "Afghanistan",
        "format": "T20I",
        "playerType": "Seam",
        "basePrice": 50
    },
    {
        "name": "Andrew Tye",
        "team": "Australia",
        "format": "ODI and T20I",
        "playerType": "Seam",
        "basePrice": 20
    },
    {
        "name": "Daniel Sams",
        "team": "Australia",
        "format": "T20I",
        "playerType": "Seam",
        "basePrice": 20
    },
    {
        "name": "Jason Bahrendorff",
        "team": "Australia",
        "format": "ODI and T20I",
        "playerType": "Seam",
        "basePrice": 50
    },
    {
        "name": "Jhye Richardson",
        "team": "Australia",
        "format": "Test,ODI and T20I",
        "playerType": "Seam",
        "basePrice": 20
    },
    {
        "name": "Josh Hazlewood",
        "team": "Australia",
        "format": "Test,ODI and T20I",
        "playerType": "Seam",
        "basePrice": 200
    },
    {
        "name": "Kane Richardson",
        "team": "Australia",
        "format": "ODI and T20I",
        "playerType": "Seam",
        "basePrice": 50
    },
    {
        "name": "Mitchell Starc",
        "team": "Australia",
        "format": "Test,ODI and T20I",
        "playerType": "Seam",
        "basePrice": 200
    },
    {
        "name": "Nathan Coulter-Nile",
        "team": "Australia",
        "format": "ODI",
        "playerType": "Seam",
        "basePrice": 50
    },
    {
        "name": "Nathan Ellis",
        "team": "Australia",
        "format": "ODI and T20I",
        "playerType": "Seam",
        "basePrice": 50
    },
    {
        "name": "Pat Cummins",
        "team": "Australia",
        "format": "Test,ODI and T20I",
        "playerType": "Seam",
        "basePrice": 200
    },
    {
        "name": "Riley Meredith",
        "team": "Australia",
        "format": "ODI and T20I",
        "playerType": "Seam",
        "basePrice": 20
    },
    {
        "name": "Scott Boland",
        "team": "Australia",
        "format": "Test and ODI",
        "playerType": "Seam",
        "basePrice": 50
    },
    {
        "name": "Mustafizur Rahman",
        "team": "Bangladesh",
        "format": "ODI and T20I",
        "playerType": "Seam",
        "basePrice": 150
    },
    {
        "name": "Chris Jordan",
        "team": "England",
        "format": "ODI and T20I",
        "playerType": "Seam",
        "basePrice": 50
    },
    {
        "name": "James Anderson",
        "team": "England",
        "format": "Test",
        "playerType": "Seam",
        "basePrice": 150
    },
    {
        "name": "Jofra Archer",
        "team": "England",
        "format": "Test,ODI and T20I",
        "playerType": "Seam",
        "basePrice": 200
    },
    {
        "name": "Mark Wood",
        "team": "England",
        "format": "Test,ODI and T20I",
        "playerType": "Seam",
        "basePrice": 150
    },
    {
        "name": "Reece Topley",
        "team": "England",
        "format": "ODI and T20I",
        "playerType": "Seam",
        "basePrice": 100
    },
    {
        "name": "Saqib Mahmood",
        "team": "England",
        "format": "Test,ODI and T20I",
        "playerType": "Seam",
        "basePrice": 20
    },
    {
        "name": "Tymal Mills",
        "team": "England",
        "format": "ODI and T20I",
        "playerType": "Seam",
        "basePrice": 20
    },
    {
        "name": "Arshdeep Singh",
        "team": "India",
        "format": "T20I",
        "playerType": "Seam",
        "basePrice": 50
    },
    {
        "name": "Avesh Khan",
        "team": "India",
        "format": "T20I",
        "playerType": "Seam",
        "basePrice": 50
    },
    {
        "name": "Bhuvneshwar Kumar",
        "team": "India",
        "format": "Test,ODI and T20I",
        "playerType": "Seam",
        "basePrice": 200
    },
    {
        "name": "Deepak Chahar",
        "team": "India",
        "format": "ODI and T20I",
        "playerType": "Seam",
        "basePrice": 100
    },
    {
        "name": "Harshal Patel",
        "team": "India",
        "format": "T20I",
        "playerType": "Seam",
        "basePrice": 50
    },
    {
        "name": "Ishant Sharma",
        "team": "India",
        "format": "Test",
        "playerType": "Seam",
        "basePrice": 50
    },
    {
        "name": "Jasprit Bumrah",
        "team": "India",
        "format": "Test,ODI and T20I",
        "playerType": "Seam",
        "basePrice": 200
    },
    {
        "name": "Khaleel Ahmed",
        "team": "India",
        "format": "ODI",
        "playerType": "Seam",
        "basePrice": 20
    },
    {
        "name": "Mohammed Shami",
        "team": "India",
        "format": "Test,ODI and T20I",
        "playerType": "Seam",
        "basePrice": 200
    },
    {
        "name": "Mohammed Siraj",
        "team": "India",
        "format": "Test, ODI and T20I",
        "playerType": "Seam",
        "basePrice": 100
    },
    {
        "name": "Prasidh Krishna",
        "team": "India",
        "format": "ODI and T20I",
        "playerType": "Seam",
        "basePrice": 20
    },
    {
        "name": "T Natarajan",
        "team": "India",
        "format": "ODI and T20I",
        "playerType": "Seam",
        "basePrice": 20
    },
    {
        "name": "Umesh Yadav",
        "team": "India",
        "format": "Test and T20I",
        "playerType": "Seam",
        "basePrice": 50,
        "Column7": "  "
    },
    {
        "name": "Umran Malik",
        "team": "India",
        "format": "T20I",
        "playerType": "Seam",
        "basePrice": 20
    },
    {
        "name": "Adam Milne",
        "team": "New Zealand",
        "format": "ODI and T20I",
        "playerType": "Seam",
        "basePrice": 50
    },
    {
        "name": "Kyle Jamieson",
        "team": "New Zealand",
        "format": "Test,ODI and T20I",
        "playerType": "Seam",
        "basePrice": 50
    },
    {
        "name": "Lockie Ferguson",
        "team": "New Zealand",
        "format": "ODI and T20I",
        "playerType": "Seam",
        "basePrice": 100
    },
    {
        "name": "Matt Henry",
        "team": "New Zealand",
        "format": "Test, ODI and T20I",
        "playerType": "Seam",
        "basePrice": 100
    },
    {
        "name": "Neil Wagner",
        "team": "New Zealand",
        "format": "Test",
        "playerType": "Seam",
        "basePrice": 50
    },
    {
        "name": "Tim Southee",
        "team": "New Zealand",
        "format": "Test,ODI and T20I",
        "playerType": "Seam",
        "basePrice": 150
    },
    {
        "name": "Trent Boult",
        "team": "New Zealand",
        "format": "Test,ODI and T20I",
        "playerType": "Seam",
        "basePrice": 200
    },
    {
        "name": "Haris Rauf",
        "team": "Pakistan",
        "format": "ODI and T20I",
        "playerType": "Seam",
        "basePrice": 100
    },
    {
        "name": "Hasan Ali",
        "team": "Pakistan",
        "format": "ODI and T20I",
        "playerType": "Seam",
        "basePrice": 50
    },
    {
        "name": "Shaheen Shah Afridi",
        "team": "Pakistan",
        "format": "Test,ODI and T20I",
        "playerType": "Seam",
        "basePrice": 200
    },
    {
        "name": "Anrich Nortje",
        "team": "South Africa",
        "format": "Test,ODI and T20I",
        "playerType": "Seam",
        "basePrice": 100
    },
    {
        "name": "Gerald Coetzee",
        "team": "South Africa",
        "format": "Test,ODI and T20I",
        "playerType": "Seam",
        "basePrice": 100
    },
    {
        "name": "Kagiso Rabada",
        "team": "South Africa",
        "format": "Test,ODI and T20I",
        "playerType": "Seam",
        "basePrice": 200
    },
    {
        "name": "Lungi Ngidi",
        "team": "South Africa",
        "format": "Test,ODI and T20I",
        "playerType": "Seam",
        "basePrice": 50
    },
    {
        "name": "Wyne Parnell",
        "team": "South Africa",
        "format": "ODI and T20I",
        "playerType": "Seam",
        "basePrice": 50
    },
    {
        "name": "Dilshan Madhushanka ",
        "team": "Srilanka",
        "format": "ODI and T20I",
        "playerType": "Seam",
        "basePrice": 100
    },
    {
        "name": "Dushmantha Chameera",
        "team": "Srilanka",
        "format": "ODI and T20I",
        "playerType": "Seam",
        "basePrice": 50
    },
    {
        "name": "Alizari Joseph",
        "team": "West Indies",
        "format": "Test,ODI and T20I",
        "playerType": "Seam",
        "basePrice": 100
    },
    {
        "name": "Obed McCoy",
        "team": "West Indies",
        "format": "ODI and T20I",
        "playerType": "Seam",
        "basePrice": 20
    },
    {
        "name": "Mujeeb Ur Rahman",
        "team": "Afghanistan",
        "format": "ODI and T20I",
        "playerType": "Spin",
        "basePrice": 100
    },
    {
        "name": "Rashid Khan",
        "team": "Afghanistan",
        "format": "Test,ODI and T20I",
        "playerType": "Spin",
        "basePrice": 200
    },
    {
        "name": "Adam Zampa",
        "team": "Australia",
        "format": "ODI and T20I",
        "playerType": "Spin",
        "basePrice": 150
    },
    {
        "name": "Mitchell Swepson",
        "team": "Australia",
        "format": "Test and T20I",
        "playerType": "Spin",
        "basePrice": 20
    },
    {
        "name": "Nathon Lyon",
        "team": "Australia",
        "format": "Test",
        "playerType": "Spin",
        "basePrice": 150
    },
    {
        "name": "Todd Murphy",
        "team": "Australia",
        "format": "Test",
        "playerType": "Spin",
        "basePrice": 50
    },
    {
        "name": "Adil Rashid",
        "team": "England",
        "format": "ODI and T20I",
        "playerType": "Spin",
        "basePrice": 100
    },
    {
        "name": "Axar Patel",
        "team": "India",
        "format": "Test,ODI and T20I",
        "playerType": "Spin",
        "basePrice": 100
    },
    {
        "name": "Kuldeep Yadav",
        "team": "India",
        "format": "ODI and T20I",
        "playerType": "Spin",
        "basePrice": 50
    },
    {
        "name": "Rahul Chahar",
        "team": "India",
        "format": "T20I",
        "playerType": "Spin",
        "basePrice": 20
    },
    {
        "name": "Ravi Bishnoi",
        "team": "India",
        "format": "T20I",
        "playerType": "Spin",
        "basePrice": 50
    },
    {
        "name": "Ravichandran Ashwin",
        "team": "India",
        "format": "Test and T20I",
        "playerType": "Spin",
        "basePrice": 150
    },
    {
        "name": "Varun Chakravarthy",
        "team": "India",
        "format": "T20I",
        "playerType": "Spin",
        "basePrice": 50
    },
    {
        "name": "Yuzvendra Chahal",
        "team": "India",
        "format": "ODI and T20I",
        "playerType": "Spin",
        "basePrice": 150
    },
    {
        "name": "Ish Sodhi",
        "team": "New Zealand",
        "format": "ODI and T20I",
        "playerType": "Spin",
        "basePrice": 50
    },
    {
        "name": "Mitchell Santner",
        "team": "New Zealand",
        "format": "Test,ODI and T20I",
        "playerType": "Spin",
        "basePrice": 100
    },
    {
        "name": "Yasir Shah",
        "team": "Pakistan",
        "format": "Test",
        "playerType": "Spin",
        "basePrice": 100
    },
    {
        "name": "Keshav Maharaj",
        "team": "South Africa",
        "format": "Test and ODI",
        "playerType": "Spin",
        "basePrice": 100
    },
    {
        "name": "Tarbaz Shamshi",
        "team": "South Africa",
        "format": "ODI and T20I",
        "playerType": "Spin",
        "basePrice": 100
    },
    {
        "name": "Mahesh Theekshana",
        "team": "Srilanka",
        "format": "ODI and T20I",
        "playerType": "Spin",
        "basePrice": 100
    },
    {
        "name": "Wanindu Hasaranga",
        "team": "Srilanka",
        "format": "ODI and T20I",
        "playerType": "Spin",
        "basePrice": 150
    },
    {
        "name": "Mohammad Shahzad",
        "team": "Afghanistan",
        "format": "ODI and T20I",
        "playerType": "Wicket-Keeper",
        "basePrice": 20
    },
    {
        "name": "Rahmanullah Gurbaz",
        "team": "Afghanistan",
        "format": "ODI and T20I",
        "playerType": "Wicket-Keeper",
        "basePrice": 50
    },
    {
        "name": "Alex Carey",
        "team": "Australia",
        "format": "Test,ODI and T20I",
        "playerType": "Wicket-Keeper",
        "basePrice": 50
    },
    {
        "name": "Josh inglis",
        "team": "Australia",
        "format": "ODI and T20I",
        "playerType": "Wicket-Keeper",
        "basePrice": 20
    },
    {
        "name": "Mathew Wade",
        "team": "Australia",
        "format": "Test,ODI and T20I",
        "playerType": "Wicket-Keeper",
        "basePrice": 50
    },
    {
        "name": "Liton Das",
        "team": "Bangladesh",
        "format": "Test,ODI and T20I",
        "playerType": "Wicket-Keeper",
        "basePrice": 100
    },
    {
        "name": "Mushfiqur Rahim",
        "team": "Bangladesh",
        "format": "Test,ODI and T20I",
        "playerType": "Wicket-Keeper",
        "basePrice": 50
    },
    {
        "name": "Johnny Bairstow",
        "team": "England",
        "format": "Test,ODI and T20I",
        "playerType": "Wicket-Keeper",
        "basePrice": 150
    },
    {
        "name": "Jos Buttler",
        "team": "England",
        "format": "Test,ODI and T20I",
        "playerType": "Wicket-Keeper",
        "basePrice": 200
    },
    {
        "name": "Sam Billings",
        "team": "England",
        "format": "ODI and T20I",
        "playerType": "Wicket-Keeper",
        "basePrice": 20
    },
    {
        "name": "Dinesh Karthik*",
        "team": "India",
        "format": "ODI and T20I",
        "playerType": "Wicket-Keeper",
        "basePrice": 50
    },
    {
        "name": "Ishan Kishan",
        "team": "India",
        "format": "Test, ODI and T20I",
        "playerType": "Wicket-Keeper",
        "basePrice": 150
    },
    {
        "name": "Jitesh Sharma",
        "team": "India",
        "format": "T20I",
        "playerType": "Wicket-Keeper",
        "basePrice": 20
    },
    {
        "name": "Mahendra Singh Dhoni*",
        "team": "India",
        "format": "T20I",
        "playerType": "Wicket-Keeper",
        "basePrice": 200
    },
    {
        "name": "Rishabh Pant",
        "team": "India",
        "format": "Test,ODI and T20I",
        "playerType": "Wicket-Keeper",
        "basePrice": 200
    },
    {
        "name": "Sanju Samson",
        "team": "India",
        "format": "ODI and T20I",
        "playerType": "Wicket-Keeper",
        "basePrice": 100
    },
    {
        "name": "Wridhiman Saha",
        "team": "India",
        "format": "Test",
        "playerType": "Wicket-Keeper",
        "basePrice": 50
    },
    {
        "name": "Tom Latham",
        "team": "New Zealand",
        "format": "Test and ODI",
        "playerType": "Wicket-Keeper",
        "basePrice": 50
    },
    {
        "name": "Mohammad Rizwan",
        "team": "Pakistan",
        "format": "Test,ODI and T20I",
        "playerType": "Wicket-Keeper",
        "basePrice": 150
    },
    {
        "name": "Heinrich Klaassen",
        "team": "South Africa",
        "format": "ODI and T20I",
        "playerType": "Wicket-Keeper",
        "basePrice": 150
    },
    {
        "name": "Quinton De Kock",
        "team": "South Africa",
        "format": "T20I",
        "playerType": "Wicket-Keeper",
        "basePrice": 200
    },
    {
        "name": "Kusal Perara",
        "team": "Srilanka",
        "format": "ODI and T20I",
        "playerType": "Wicket-Keeper",
        "basePrice": 50
    },
    {
        "name": "Nichollas Pooran",
        "team": "West Indies",
        "format": "ODI and T20I",
        "playerType": "Wicket-Keeper",
        "basePrice": 150
    },
    {
        "name": "Shai Hope",
        "team": "West Indies",
        "format": "Test and ODI",
        "playerType": "Wicket-Keeper",
        "basePrice": 100
    }
]

export let PlayersBasedOnType = {};

players.forEach((obj) => {
    if (!PlayersBasedOnType[obj.playerType]) {
        PlayersBasedOnType[obj.playerType] = []
    }
    PlayersBasedOnType[obj.playerType].push(obj)
})
export let playerType = ["Allrounder", "Wicket-Keeper", "Spin", "Seam", "Batsmen"]

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
shuffleArray(playerType)
for (let i in playerType) {
    shuffleArray(PlayersBasedOnType[playerType[i]])
}

export function getType() {
    const sets = [...playerType]
    shuffleArray(sets)
    return sets
}
const getNewPlayerSet = () => {
    let obj = {}
    for (let i in playerType) {
        let x = PlayersBasedOnType[playerType[i]]
        shuffleArray(x)
        obj[playerType[i]] = x
    }
    return obj
};
export { getNewPlayerSet };