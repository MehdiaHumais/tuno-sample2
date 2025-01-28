// images
import blogImg1 from "../images/blog/img-1.jpg";
import blogImg2 from "../images/blog/img-1.jpg";
import blogImg3 from "../images/blog/img-1.jpg";
import blogImg4 from "../images/blog/img-1.jpg";
import blogImg5 from "../images/blog/img-5.jpg";
import blogImg6 from "../images/blog/img-6.jpg";

import blogSingleImg1 from "../images/blog-details/img-1.jpg";
import blogSingleImg2 from "../images/blog-details/img-2.jpg";




const blogs = [
    {
        id: '1',
        title: 'Understanding Responsive Web Design',
        screens: blogImg1,
        description: 'Helpful tips for become a successful designer',
        author: 'Marilou',
        thumb:'Designer',
        create_at: '25 Dec, 2023',
        blogSingleImg:blogSingleImg1, 
        comment:'35',
        blClass:'format-standard-image',
    },
    {
        id: '2',
        title: 'Introduction to Web Development Frameworks',
        screens: blogImg2,
        description: 'Master new skills easily this May 2023.',
        author: 'Konal',
        thumb:'Developer',
        create_at: '13 Dec,2023',
        blogSingleImg:blogSingleImg2, 
        comment:'80',
        blClass:'format-standard-image',
    },
    {
        id: '3',
        title: 'How to Optimize Your Website for Speed',
        screens: blogImg3,
        description: 'We provide solutions growin your business',
        author: 'Aliza',
        thumb:'Fasion',
        create_at: '22 Dec,2023',
        comment:'95',
        blClass:'format-video',
    },
    {
        id: '4',
        title: 'SEO for Developers: How to Rank Your Website',
        screens: blogImg4,
        description: 'Many desktop publish package editors use.',
        author: 'Biry',
        thumb:'Fasion',
        create_at: '13 Dec,2023',
        comment:'80',
        blClass:'format-standard-image',
    },
    {
        id: '5',
        title: 'Building a Portfolio Website: A Developer’s Guide',
        screens: blogImg5,
        description: 'The definitive list of digital products you can sell',
        author: 'Sharah',
        thumb:'Developer',
        create_at: '13 Dec,2023', 
        comment:'80',
        blClass:'format-standard-image',
    },
    {
        id: '6',
        title: 'The Basics of Web Security: Protecting Your Site',
        screens: blogImg6,
        description: 'Nemo enim ipsam voluptatem quia voluptas.',
        author: 'Maria',
        thumb:'Fasion',
        create_at: '22 Dec,2023',
        comment:'95',
        blClass:'format-video',
    },
];
export default blogs;