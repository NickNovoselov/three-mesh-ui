
import { Color, Texture } from 'three';

/** List the default values of the lib components */
export default {
	container: null,
	fontFamily: null,
	fontSize: 0.05,
	offset: 0.01,
	interLine: 0.01,
	breakOn: '- ,.:?!',
	contentDirection: "column",
	alignContent: "center",
	justifyContent: "start",
	fontTexture: null,
	textType: "MSDF",
	fontColor: new Color( 0xffffff ),
	fontOpacity: 1,
	borderRadius: 0.01,
	borderWidth: 0,
	borderColor: new Color( 'black' ),
	backgroundSize: "cover",
	backgroundColor: new Color( 0x222222 ),
	backgroundWhiteColor: new Color( 0xffffff ),
	backgroundOpacity: 0.8,
	backgroundOpaqueOpacity: 1.0,
	backgroundTexture: DefaultBackgroundTexture(),
	hiddenOverflow: false,
};

//

function DefaultBackgroundTexture() {

	const image = new Image();
	image.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAA1JREFUGFdj+P///38ACfsD/QVDRcoAAAAASUVORK5CYII=';
	image.onload = () => {
		texture.needsUpdate = true;
	};
	const texture = new Texture(image);
	texture.needsUpdate = true;
	texture.isDefault = true;
	return texture;

}
