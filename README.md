# THREE.JS JOURNEY
- [Basic Elements](#basic-elements)
- [Scene](#scene)
- [Objects](#objects)
  - [mesh](#mesh)
    - [geometry](#geometry)
    - [material](#material)
  - [scene-add-mesh](#scene-add-mesh)
- [Camera](#camera)
  - [perspective camera](#perspective-camera)
  - [orthographic camera](#orthographic-camera)
  - [camera parameters](#camera-parameters)
  - [fov -> fielf of view](#fov)
  - [aspect ratio](#aspect-ratio)
- [Render](#render)
  - [renderer](#renderer)
- [Webpack](#webpack)
- [Transform objects](#transform-objects)
  - [position](#position)
  - [axes helper](#axes-helper)
  - [look at](#look-at)
  - [groups](#groups)
- [Request Animation Frame](#request-animation-frame)
  - [timestamp](#timestamp)
  - [clock](#clock)
  - [using library](#using-library)
    - [gsap](#gsap)
- [Cameras](#cameras)
- [Customs Controls](#customs-controls)
- [Build-in Controls](#build-in-controls)
  - [device orientation controls](#device-orientation-controls)
  - [fly controls](#fly-controls)
  - [first person controls](#first-person-controls)
  - [pointer lock controls](#pointer-lock-controls)
  - [orbit controls](#orbit-controls)
  - [trackball controls](#trackball-controls)
  - [transform controls](#transform-controls)
  - [drag controls](#drag-controls)
- [Fullscreen Resizing](#fullscreen-resizing)
  - [fit-in-the-viewport](#fit-in-the-viewport)
  - [handle resize](#handle-resize)
  - [handle fullscreen](#handle-fullscreen)
  - [safari fullscreen](#safari-fullscreen)
- [Geometries](#geometries)
  - [built-in geometries](#built-in-geometries)
  - [create own geometries](#create-own-geometries)
- [Debug UI](#debug-ui)
  - [add-elements](#add-elements)
  - [colors](#colors)
  - [functions](#functions)
  - [tips](#tips)

- [Lights](#lights)
  - [ambient light](#ambient-light)
  - [directional light](#directional-light)
  - [hemisphere light](#hemisphere-light)
  - [point light](#point-light)
  - [rect area light](#rect-area-light)
  - [spot light](#spot-light)
  - [performances](#performances)
  - [baking](#baking)
  - [helpers](#helpers)

## BASIC ELEMENTS
<div align="center">
    <img src="./md/basic-elements.png" alt="img">
</div>

## SCENE
<div align="center">
    <img src="./md/scene.png" alt="img">
</div>

## OBJECTS
<div align="center">
    <img src="./md/objects.png" alt="img">
</div>

### mesh
<div align="center">
    <img src="./md/mesh.png" alt="img">
</div>

<div align="center">
    <img src="./md/mesh-ii.png" alt="img">
</div>

#### geometry
<div align="center">
    <img src="./md/geometry-i.png" alt="img">
</div>

<div align="center">
    <img src="./md/geometry.png" alt="img">
</div>

#### material
<div align="center">
    <img src="./md/material-i.png" alt="img">
</div>

<div align="center">
    <img src="./md/material.png" alt="img">
</div>

### scene-add-mesh
<div align="center">
    <img src="./md/mesh-add.png" alt="img">
</div>

## CAMERA
<div align="center">
    <img src="./md/camera.png" alt="img">
</div>

### perspective camera
<div align="center">
    <img src="./md/camera-perspective.png" alt="img">
</div>

### orthographic camera
<div align="center">
    <img src="./md/camera-orthographic.png" alt="img">
</div>

### Camera Parameters
### fov
<div align="center">
    <img src="./md/camera-ii.png" alt="img">
</div>  

### aspect ratio
<div align="center">
    <img src="./md/camera-iii.png" alt="img">
</div>

## RENDER
<div align="center">
    <img src="./md/render.png" alt="img">
</div>

<div align="center">
    <img src="./md/render-ii.png" alt="img">
</div>

### renderer
<div align="center">
    <img src="./md/renderer.png" alt="img">
</div>

<div align="center">
    <img src="./md/renderer-ii.png" alt="img">
</div>

<div align="center">
    <img src="./md/renderer-iii.png" alt="img">
</div>

## WEBPACK
<div align="center">
    <img src="./md/webpack-import-three.png" alt="img">
</div>

## TRANSFORM OBJECTS
<div align="center">
    <img src="./md/transform-objects.png" alt="img">
</div>

### position
<div align="center">
    <img src="./md/position-length.png" alt="img">
</div>

<div align="center">
    <img src="./md/position-distanceTo.png" alt="img">
</div>

<div align="center">
    <img src="./md/position-set.png" alt="img">
</div>

### axes helper
<div align="center">
    <img src="./md/axes-helper.png" alt="img">
</div>

<div align="center">
    <img src="./md/axes-helper-ii.png" alt="img">
</div>

<div align="center">
    <img src="./md/axes-helper-iii.png" alt="img">
</div>

###  look at
<div align="center">
    <img src="./md/look-at.png" alt="img">
</div>

<div align="center">
    <img src="./md/look-at-ii.png" alt="img">
</div>

### groups
<div align="center">
    <img src="./md/groups.png" alt="img">
</div>

## REQUEST ANIMATION FRAME
<div align="center">
    <img src="./md/request-animation-frame-i.png" alt="img">
</div>

<div align="center">
    <img src="./md/request-animation-frame-ii.png" alt="img">
</div>
    The function provided will be call once on the next frame

## ADAPTION TO THE FRAMERATE
### timestamp
<div align="center">
    <img src="./md/adaption-tothe-framerate.png" alt="img">
</div>

<div align="center">
    <img src="./md/adaption-tothe-framerate-i.png" alt="img">
</div>

<div align="center">
    <img src="./md/adaption-tothe-framerate-ii.png" alt="img">
</div>

<div align="center">
    <img src="./md/adaption-tothe-framerate-iii.png" alt="img">
</div>

### timestamp
<div align="center">
    <img src="./md/clock.png" alt="img">
</div>

<div align="center">
    <img src="./md/clock-i.png" alt="img">
</div>

<div align="center">
    <img src="./md/clock-ii.png" alt="img">
</div>

### using library
<div align="center">
    <img src="./md/using-library.png" alt="img">
</div>

<div align="center">
    <img src="./md/using-library-i.png" alt="img">
</div>

#### GSAP
<div align="center">
    <img src="./md/gsap.png" alt="img">
</div>

<div align="center">
    <img src="./md/gsap-i.png" alt="img">
</div>

<div align="center">
    <img src="./md/gsap.png" alt="img">
</div>

## CAMERAS
<div align="center">
    <img src="./md/07-cameras.png" alt="img">
</div>

<div align="center">
    <img src="./md/07-cameras-perspective-camera.png" alt="img">
</div>

<div align="center">
    <img src="./md/07-cameras-perspective-camera-i.png" alt="img">
</div>

<div align="center">
    <img src="./md/07-cameras-orthographic-camera-i.png" alt="img">
</div>

<div align="center">
    <img src="./md/07-cameras-orthographic-camera.png" alt="img">
</div>

## CUSTOMS CONTROLS
<div align="center">
    <img src="./md/customs-controls.png" alt="img">
</div>

<div align="center">
    <img src="./md/customs-controls-i.png" alt="img">
</div>

<div align="center">
    <img src="./md/customs-controls-ii.png" alt="img">
</div>

<div align="center">
    <img src="./md/customs-controls-iii.png" alt="img">
</div>

<div align="center">
    <img src="./md/customs-controls-iv.png" alt="img">
</div>

<div align="center">
    <img src="./md/customs-controls-v.png" alt="img">
</div>

## BUILT-IN CONTROLS
<div align="center">
    <img src="./md/built-in-controls.png" alt="img">
</div>

### device orientation controls
<div align="center">
    <img src="./md/device-orientation-controls.png" alt="img">
</div>

### fly controls
<div align="center">
    <img src="./md/fly-controls.png" alt="img">
</div>

### first person controls
<div align="center">
    <img src="./md/first-person-controls.png" alt="img">
</div>

### pointer lock controls
<div align="center">
    <img src="./md/pointer-lock-control.png" alt="img">
</div>

### orbit controls
<div align="center">
    <img src="./md/orbit-controls.png" alt="img">
</div>

<div align="center">
    <img src="./md/orbit-controls-instanciating.png" alt="img">
</div>

<div align="center">
    <img src="./md/orbit-controls-access.png" alt="img">
</div>

<div align="center">
    <img src="./md/orbit-controls-access-i.png" alt="img">
</div>

<div align="center">
    <img src="./md/orbit-controls-access-ii.png" alt="img">
</div>

<div align="center">
    <img src="./md/orbit-controls-access-iii.png" alt="img">
</div>

<div align="center">
    <img src="./md/damping.png" alt="img">
</div>

<div align="center">
    <img src="./md/damping-i.png" alt="img">
</div>

<div align="center">
    <img src="./md/damping-ii.png" alt="img">
</div>

### trackball controls
<div align="center">
    <img src="./md/trackball-controls.png" alt="img">
</div>

### transform controls
<div align="center">
    <img src="./md/transform-controls.png" alt="img">
</div>

### drag controls
<div align="center">
    <img src="./md/drag-controls.png" alt="img">
</div>fullscreen-resizing

## FULLSCREEN RESIZING
<div align="center">
    <img src="./md/fullscreen-resizing.png" alt="img">
</div>

### fit in the viewport
<div align="center">
    <img src="./md/fit-in-the-viewport.png" alt="img">
</div>

<div align="center">
    <img src="./md/fit-in-the-viewport-ii.png" alt="img">
</div>

<div align="center">
    <img src="./md/fit-in-the-viewport-iii.png" alt="img">
</div>

<div align="center">
    <img src="./md/fit-in-the-viewport-iv.png" alt="img">
</div>

<div align="center">
    <img src="./md/fit-in-the-viewport-v.png" alt="img">
</div>

<div align="center">
    <img src="./md/fit-in-the-viewport-vi.png" alt="img">
</div>

<div align="center">
    <img src="./md/fit-in-the-viewport-vii.png" alt="img">
</div>

### handle resize
<div align="center">
    <img src="./md/handle-resize.png" alt="img">
</div>

<div align="center">
    <img src="./md/handle-resize-ii.png" alt="img">
</div>

<div align="center">
    <img src="./md/handle-resize-iii.png" alt="img">
</div>
<div align="center">
    <img src="./md/handle-resize-iv.png" alt="img">
</div>
<div align="center">
    <img src="./md/handle-resize-vi.png" alt="img">
</div>
<div align="center">
    <img src="./md/handle-resize-vii.png" alt="img">
</div>

### handle pixel ratio
<div align="center">
    <img src="./md/handle-pixel-ratio.png" alt="img">
</div>

<div align="center">
    <img src="./md/handle-pixel-ratio-ii.png" alt="img">
</div>

<div align="center">
    <img src="./md/handle-pixel-ratio-iii.png" alt="img">
</div>

<div align="center">
    <img src="./md/handle-pixel-ratio-iv.png" alt="img">
</div>

### handle fullscreen
<div align="center">
    <img src="./md/handle-fullscreen.png" alt="img">
</div>

<div align="center">
    <img src="./md/handle-fullscreen-ii.png" alt="img">
</div>

<div align="center">
    <img src="./md/handle-fullscreen-iii.png" alt="img">
</div>

<div align="center">
    <img src="./md/handle-fullscreen-iv.png" alt="img">
</div>

<div align="center">
    <img src="./md/handle-fullscreen-v.png" alt="img">
</div>

### safari fullscreen
<div align="center">
    <img src="./md/safari-fullscreen.png" alt="img">
</div>

## GEOMETRIES
<div align="center">
    <img src="./md/10-geometries.png" alt="img">
</div>

<div align="center">
    <img src="./md/10-geometries-i.png" alt="img">
</div>

<div align="center">
    <img src="./md/10-geometries-ii.png" alt="img">
</div>

<div align="center">
    <img src="./md/10-geometries-iii.png" alt="img">
</div>

<div align="center">
    <img src="./md/10-geometries-iv.png" alt="img">
</div>

### built-in geometries
<div align="center">
    <img src="./md/10-geometries-built-in-geometries.png" alt="img">
</div>

<div align="center">
    <img src="./md/10-geometries-built-in-geometries-i.png" alt="img">
</div>

<div align="center">
    <img src="./md/10-geometries-built-in-geometries-ii.png" alt="img">
</div>

### create own geometries
        Now three.js not suport Geometry()
<div align="center">
    <img src="./md/10-geometries-create-own-geometries.png" alt="img">
</div>

<div align="center">
    <img src="./md/10-geometries-create-own-geometries-i.png" alt="img">
</div>

<div align="center">
    <img src="./md/10-geometries-create-own-geometries-ii.png" alt="img">
</div>

<div align="center">
    <img src="./md/10-geometries-create-own-geometries-iii.png" alt="img">
</div>

## DEBUG UI
<div align="center">
    <img src="./md/debug-ui-i.png" alt="img">
</div>

<div align="center">
    <img src="./md/debug-ui-ii.png" alt="img">
</div>

<div align="center">
    <img src="./md/debug-ui-iii.png" alt="img">
</div>

<div align="center">
    <img src="./md/debug-ui-iv.png" alt="img">
</div>

### add elements
<div align="center">
    <img src="./md/debug-ui-v.png" alt="img">
</div>

<div align="center">
    <img src="./md/debug-ui-vi.png" alt="img">
</div>

<div align="center">
    <img src="./md/debug-ui-vii.png" alt="img">
</div>

<div align="center">
    <img src="./md/debug-ui-viii.png" alt="img">
</div>

<div align="center">
    <img src="./md/debug-ui-ix.png" alt="img">
</div>

<div align="center">
    <img src="./md/debug-ui-x.png" alt="img">
</div>

### colors
<div align="center">
    <img src="./md/debug-ui-colors-i.png" alt="img">
</div>

<div align="center">
    <img src="./md/debug-ui-colors-ii.png" alt="img">
</div>

<div align="center">
    <img src="./md/debug-ui-colors-iii.png" alt="img">
</div>

<div align="center">
    <img src="./md/debug-ui-colors-iv.png" alt="img">
</div>

<div align="center">
    <img src="./md/debug-ui-colors-v.png" alt="img">
</div>

<div align="center">        
    <img src="./md/debug-ui-colors-vi.png" alt="img">
</div>

### functions
<div align="center">
    <img src="./md/debug-ui-functions-i.png" alt="img">
</div>

<div align="center">
    <img src="./md/debug-ui-functions-ii.png" alt="img">
</div>

### tips
<div align="center">
    <img src="./md/debug-ui-tips-i.png" alt="img">
</div>

<div align="center">
    <img src="./md/debug-ui-tips-ii.png" alt="img">
</div>

<div align="center">
    <img src="./md/debug-ui-tips-iii.png" alt="img">
</div>

<div align="center">
    <img src="./md/debug-ui-tips-iv.png" alt="img">
</div>

<div align="center">
    <img src="./md/debug-ui-tips-v.png" alt="img">
</div>


## LIGHTS
<div align="center">
    <img src="./md/14-lights-i.png" alt="img">
</div>

<div align="center">
    <img src="./md/14-lights-ii.png" alt="img">
</div>

### ambient light
<div align="center">
    <img src="./md/14-lights-ambient-light-i.png" alt="img">
</div>

<div align="center">
    <img src="./md/14-lights-ambient-light-i-draw.png" alt="img">
</div>

<div align="center">
    <img src="./md/14-lights-ambient-light-ii.png" alt="img">
</div>

<div align="center">
    <img src="./md/14-lights-ambient-light-iii.png" alt="img">
</div>

<div align="center">
    <img src="./md/14-lights-ambient-light-iii-draw.png" alt="img">
</div>

### directional light
<div align="center">
    <img src="./md/14-lights-directional-light-i.png" alt="img">
</div>

<div align="center">
    <img src="./md/14-lights-directional-light-i-draw.png" alt="img">
</div>

<div align="center">
    <img src="./md/14-lights-directional-light-ii.png" alt="img">
</div>

<div align="center">
    <img src="./md/14-lights-directional-light-iii.png" alt="img">
</div>

### hemisphere light
<div align="center">
    <img src="./md/14-lights-hemisphere-light-i.png" alt="img">
</div>

<div align="center">
    <img src="./md/14-lights-hemisphere-light-i-draw.png" alt="img">
</div>

<div align="center">
    <img src="./md/14-lights-hemisphere-light-ii.png" alt="img">
</div>

### point light
<div align="center">
    <img src="./md/14-lights-point-light-i.png" alt="img">
</div>

<div align="center">
    <img src="./md/14-lights-point-light-i-draw.png" alt="img">
</div>

<div align="center">
    <img src="./md/14-lights-point-light-ii.png" alt="img">
</div>

<div align="center">
    <img src="./md/14-lights-point-light-iii.png" alt="img">
</div>

<div align="center">
    <img src="./md/14-lights-point-light-iii-draw.png" alt="img">
</div>

### rect area light
<div align="center">
    <img src="./md/14-lights-rect-area-light-i.png" alt="img">
</div>

<div align="center">
    <img src="./md/14-lights-rect-area-light-i-draw.png" alt="img">
</div>

<div align="center">
    <img src="./md/14-lights-rect-area-light-ii.png" alt="img">
</div>

<div align="center">
    <img src="./md/14-lights-rect-area-light-iii.png" alt="img">
</div>

<div align="center">
    <img src="./md/14-lights-rect-area-light-iv.png" alt="img">
</div>

### spot light
<div align="center">
    <img src="./md/14-lights-spot-light-i.png" alt="img">
</div>

<div align="center">
    <img src="./md/14-lights-spot-light-i-draw.png" alt="img">
</div>

<div align="center">
    <img src="./md/14-lights-spot-light-ii.png" alt="img">
</div>

<div align="center">
    <img src="./md/14-lights-spot-light-iii.png" alt="img">
</div>

### performances
<div align="center">
    <img src="./md/14-lights-performances-i.png" alt="img">
</div>

<div align="center">
    <img src="./md/14-lights-performances-ii.png" alt="img">
</div>

<div align="center">
    <img src="./md/14-lights-performances-iii.png" alt="img">
</div>

<div align="center">
    <img src="./md/14-lights-performances-iv.png" alt="img">
</div>

<div align="center">
    <img src="./md/14-lights-performances-v.png" alt="img">
</div>

### baking
<div align="center">
    <img src="./md/14-lights-baking-i.png" alt="img">
</div>

<div align="center">
    <img src="./md/14-lights-baking-ii.png" alt="img">
</div>

### helpers
<div align="center">
    <img src="./md/14-lights-helpers-i.png" alt="img">
</div>

<div align="center">
    <img src="./md/14-lights-helpers-ii.png" alt="img">
</div>

<div align="center">
    <img src="./md/14-lights-helpers-iii.png" alt="img">
</div>

<div align="center">
    <img src="./md/14-lights-helpers-iv.png" alt="img">
</div>

<div align="center">
    <img src="./md/14-lights-helpers-v.png" alt="img">
</div>
    deprecated 👇👇👇
<div align="center">
    <img src="./md/14-lights-helpers-vi.png" alt="img">
</div>


