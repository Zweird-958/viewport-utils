import { RunService } from "@rbxts/services"
import { DISTANCE, FOV, ROTATION_SPEED } from "./constants"

export const setupViewport = (viewport: ViewportFrame, distance = DISTANCE, fov = FOV) => {
	const camera = new Instance("Camera")
	viewport.CurrentCamera = camera
	camera.CFrame = CFrame.lookAt(new Vector3(0, 0, distance), new Vector3(0, 0, 0))
	camera.FieldOfView = fov
}

export const rotateModel = (model: Model) => {
	const event = RunService.RenderStepped.Connect(() => {
		if (!model.Parent) {
			event.Disconnect()

			return
		}

		model.PivotTo(model.GetPivot()!.mul(CFrame.Angles(0, ROTATION_SPEED, 0)))
	})

	return event
}