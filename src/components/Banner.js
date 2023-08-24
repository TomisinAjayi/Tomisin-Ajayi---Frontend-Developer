import React from 'react';
import {
    Card,
    CardBody,
    Typography,
} from "@material-tailwind/react";

const data = [
    {
        id: 1,
        title: 'Dragon spacecraft',
        description: 'The Dragon spacecraft is capable of carrying up to 7 passengers to and from Earth orbit, and beyond. It is the only spacecraft currently flying that is capable of returning significant amounts of cargo to Earth, and is the first private spacecraft to take humans to the space station.'
    },
    {
        id: 2,
        title: 'Starship spacecraft',
        description: 'The Starship spacecraft and Super Heavy rocket – collectively referred to as Starship – represent a fully reusable transportation system designed to carry both crew and cargo to Earth orbit, the Moon, Mars and beyond. Starship will be the world’s most powerful launch vehicle ever developed, capable of carrying up to 150 metric tonnes fully reusable and 250 metric tonnes expendable.'
    },
    {
        id: 3,
        title: 'Falcon Heavy',
        description: 'Falcon Heavy is composed of three reusable Falcon 9 nine-engine cores whose 27 Merlin engines together generate more than 5 million pounds of thrust at liftoff, equal to approximately eighteen 747 aircraft. As one of the world’s most powerful operational rockets, Falcon Heavy can lift nearly 64 metric tons (141,000 lbs) to orbit.'
    },
]
   
const CardDefault = ({id, title, description}) => {
    return (
        
        <div>
            <Card key={id} style={{backgroundColor: '#28292a'}} className="w-full min-h-52 lg:h-72 mt-6 rounded-2xl shadow-lg lg:shadow-200 justify-center">
                <CardBody className='lg:px-16 py-12'>
                    <Typography variant="h5" color="white" className="mb-2">
                        {title}
                    </Typography>
                    <Typography variant="paragraph" color="white">
                        {description}
                    </Typography>
                </CardBody>
            </Card>
        </div>
    );
}
const Banner = () => {

  return (
    <section id='banner' className='lg:flex relative container mx-auto p-5 flex justify-between items-center'>
        <div className='lg:relative lg:left-0 cards start'>
            <CardDefault id={data[0].id} title={data[0].title} description={data[0].description} />
        </div>
        <div className='lg:absolute lg:left-[25%] cards mid'>
            <CardDefault id={data[1].id} title={data[1].title} description={data[1].description} />
        </div>
        <div className='relative right-0 cards third'>
            <CardDefault id={data[2].id} title={data[2].title} description={data[2].description} />
        </div>
    </section>
  );
}

export default Banner;
