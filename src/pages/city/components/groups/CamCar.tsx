import Infernus from '../models/Infernus';
import TheatreCameraFinal from '../CityScene/TheatreCameraFinal';

export default function CamCar() {
    return (
        <group name="CameraAnchor" >
            <Infernus />
            <TheatreCameraFinal />
        </group>
    )
}
