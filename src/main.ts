
import {bootstrapCameraKit, Transform2D, createMediaStreamSource} from '@snap/camera-kit';


(async function () {
  const cameraKit = await bootstrapCameraKit({ apiToken: 'eyJhbGciOiJIUzI1NiIsImtpZCI6IkNhbnZhc1MyU0hNQUNQcm9kIiwidHlwIjoiSldUIn0.eyJhdWQiOiJjYW52YXMtY2FudmFzYXBpIiwiaXNzIjoiY2FudmFzLXMyc3Rva2VuIiwibmJmIjoxNzAwMDg1OTM0LCJzdWIiOiI3ZDc2MTI5OC04OTM2LTRlNTEtYWU2Yy02NzgxNjU5NDIxZDl-U1RBR0lOR34xYTY0YjdlZi03MmIwLTRhNzYtYmI4MC1iODZiMTkxZGUwYWQifQ.1V5j6FCDOhS6lumOR1FsmcAQKVRux5IAgXfbVZYIq3I'});

  const liveRenderTarget = document.getElementById('myCanvas') as HTMLCanvasElement;
  const session = await cameraKit.createSession({liveRenderTarget});
  


  const mediaStream = await navigator.mediaDevices.getUserMedia({video: true,});

  const source = createMediaStreamSource(mediaStream, {
    transform: Transform2D.MirrorX,
  });


  await session.setSource(source);
  source.setRenderSize(1280, 980);
  await session.play();


  const lens = await cameraKit.lensRepository.loadLens(
    '0f3656da-a03e-4ab5-bb5e-724bee3e1907',   //lens id
    '925f1e33-ade8-45c0-a88d-01f9af3e59f1'    //lens group id
  );

  await session.applyLens(lens);
})();




document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

