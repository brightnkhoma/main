export interface TeamMember {
    name : string,
    title : string,
    qualification : string,
    imageUri : string
}


export const teamMembers : TeamMember[] = [
    {
        name : "Davie Jambo",
        title : "Group Chief Executive Officer",
        qualification : "BSc, LLM Oil Gas & Mining Law",
        imageUri : "/images/davie.png"
    },
    {
        name : "Khumbo Jambo",
        title : "Operations Director",
        qualification : "BSc (Hons) Economics",
        imageUri : "/images/Khumbo.png"
    },
    {
        name : "Sahani Harawa",
        title : "Group Financial Controller",
        qualification : "ACCA",
        imageUri : "/images/sahan.png"
    },
    {
        name : "Mwasalipa Mfune",
        title : "Group Executive Associate",
       qualification :  "BSc Animal Science",
       imageUri : "/images/mwasa1.png"
    },
    
    {
        name : "Bright Nkhoma",
        title : "Geo-Spatial Backend Developer",
        qualification : "BSc Geographical Information Systems",
        imageUri : "/images/Bright2.png"
    },
    {
        name : "Yamikani Siliya",
        title : "Mining Engineer",
        qualification : "BSc Mining Engineering (Hons)",
        imageUri : "/images/yamikani.jpeg"
    },
    {
        name : "Elias Kalonjere",
        title : "Logistics Specialist",
        qualification : "IATA Certificate in Airport Ramp service and IMIS Diploma in Information Systems",
        imageUri : "/images/Elias.jpg"
    },
    {
        name : "Saleka J. Mawimba",
        title : "Digital Marketing Officer",
        qualification : "Advanced Diploma, Computer Engineering",
        imageUri : "/images/saleka.jpg"
    },
    {
        name : "Deborah Chisuwo",
        title : "Agribusiness and partnerships officer",
        qualification : "Msc in rural development and extension",
        imageUri : "/images/d.jpeg"
    },
   
    
] as const