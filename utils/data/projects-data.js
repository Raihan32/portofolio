import fintrack from '/public/image/fintrack.png';
import freedom from '/public/image/freedom.png';
import realEstate from '/public/image/real-estate.jpg';
import gudang from '/public/image/gudang.png';
import poliklinik from '/public/image/poliklinik.png';

export const projectsData = [
    {
        id: 1,
        name: 'Inventory Management',
        description: "I have developed a warehouse management website to streamline inventory tracking, which was previously done using Excel sheets. This digitalization makes the process of recording incoming and outgoing goods more convenient.",
        tools: ['Express', 'MySQL', 'Material UI', 'ReactJS', 'NextJS', 'NodeJS', 'TypeScript'],
        role: 'Full Stack Developer',
        code: 'https://github.com/Raihan32/Gudang-NextJS',
        demo: '',
        image: gudang,
    },
    {
        id: 2,
        name: 'Fintrack',
        description: 'I have designed and developed a full-stack web app for  assists the community in managing finances effectively while also providing education on financial management.',
        tools: ['ReactJs', 'Bootstrap', "NodeJs", "ExpressJS", "MySQL", "axios", "jwt", "react-hook"],
        role: 'Full Stack Developer',
        code: 'https://github.com/Raihan32/Fintrack-ReactJS',
        demo: '',
        image: fintrack,
    },
    
    {
        id: 3,
        name: 'Freedom',
        description: 'I have developed and designed for the community to reject acts of racism. Its features include a group chat, articles, journals, and a donation section.',
        tools: ['ReactJs', 'Bootstrap', "NodeJs", "ExpressJS", "MySQL", "axios", "jwt", "react-hook"],
        role: 'Full Stack Developer',
        code: 'https://github.com/Raihan32/Freedom-macro-ReactJS',
        demo: '',
        image: freedom,
    },
    {
        id: 4,
        name: 'Appointment System Polyclinic Semarang',
        description: 'In the "Appointment System Polyclinic Semarang" website, I played the role of a full-stack developer, handling everything from the user interface to the database. This website was created to facilitate appointments between patients and doctors, aiming to streamline the scheduling process',
        tools: ['laravel', 'Bootstrap', 'PHP', 'CSS', 'Xampp', 'MySql', 'Apache', ],
        code: 'https://github.com/Raihan32/appointment-system-poliklinik-Semarang',
        role: 'Full Stack Developer',
        demo: '',
        image: poliklinik,
    }
    
];
