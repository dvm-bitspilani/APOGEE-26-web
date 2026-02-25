import { SheetProvider } from '@theatre/r3f'
import { introAnimSheet } from '../ScrollSync/ScrollSync';
import Infernus from '../models/Infernus';
import TheatreCameraFinal from '../CityScene/TheatreCameraFinal';

export default function CamCar() {
    return (
        <group>
            <SheetProvider sheet={introAnimSheet}>
                <Infernus />
                <TheatreCameraFinal />
            </SheetProvider>
        </group>
    )
}
