import { SheetProvider } from '@theatre/r3f'
import { project } from '../ScrollSync/ScrollSync'
import Infernus from '../models/Infernus';
import TheatreCameraFinal from '../CityScene/TheatreCameraFinal';

const introSheet = project.sheet("Intro Sequence");


export default function CamCar() {
    return (
        <group>
            <SheetProvider sheet={introSheet}>
                <Infernus />
                <TheatreCameraFinal />
            </SheetProvider>
        </group>
    )
}
