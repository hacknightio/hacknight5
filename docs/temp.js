const data = {
	"result": {
		"get": [{
			"apiCommand": {
				"apiCommandGroup": "Speakers",
				"arguments": {
					"fileName": {
						"getValueType": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
						"name": "FileName",
						"ordinalNumber": 0,
						"value": ""
					},
					"base64": {
						"getValueType": "System.Boolean, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
						"name": "Base64",
						"ordinalNumber": 1,
						"value": false
					}
				},
				"category": "Current",
				"commandTimeout": 20000,
				"commandType": "Information",
				"id": "GetAudioFile",
				"name": "GetAudioFile",
				"resultType": "Misty.HomeRobot.Api.Commands.ResponseObjects.AudioResponse, Misty.HomeRobot.Services, Version=2.1.1.9469, Culture=neutral, PublicKeyToken=null"
			},
			"baseApiCommand": "GetAudioFile",
			"endpoint": "audio"
		}, {
			"apiCommand": {
				"apiCommandGroup": "General",
				"arguments": {},
				"category": "Current",
				"commandTimeout": 20000,
				"commandType": "Information",
				"id": "GetCameraData",
				"name": "GetCameraData",
				"resultType": "Misty.HomeRobot.Robot.CameraInformation, Misty.HomeRobot, Version=2.1.1.9469, Culture=neutral, PublicKeyToken=null"
			},
			"baseApiCommand": "GetCameraData",
			"endpoint": "camera"
		}, {
			"apiCommand": {
				"apiCommandGroup": "General",
				"arguments": {},
				"category": "Current",
				"commandTimeout": 20000,
				"commandType": "Information",
				"id": "GetWebsocketVersion",
				"name": "GetWebsocketVersion",
				"resultType": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a"
			},
			"baseApiCommand": "GetWebsocketVersion",
			"endpoint": "websocket/version"
		}, {
			"apiCommand": {
				"apiCommandGroup": "SLAM",
				"arguments": {},
				"category": "Current",
				"commandTimeout": 20000,
				"commandType": "Action",
				"id": "SlamGetDepthImage",
				"name": "TakeDepthPicture",
				"resultType": "Misty.HomeRobot.Robot.DepthImageInformation, Misty.HomeRobot, Version=2.1.1.9469, Culture=neutral, PublicKeyToken=null"
			},
			"baseApiCommand": "SlamGetDepthImage",
			"endpoint": "cameras/depth"
		}, {
			"apiCommand": {
				"apiCommandGroup": "SLAM",
				"arguments": {
					"base64": {
						"getValueType": "System.Boolean, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
						"name": "Base64",
						"ordinalNumber": 0,
						"value": false
					}
				},
				"category": "Current",
				"commandTimeout": 20000,
				"commandType": "Action",
				"id": "SlamGetVisibleImage",
				"name": "TakeFisheyePicture",
				"resultType": "Misty.HomeRobot.Api.Commands.ResponseObjects.ImageResponse, Misty.HomeRobot.Services, Version=2.1.1.9469, Culture=neutral, PublicKeyToken=null"
			},
			"baseApiCommand": "SlamGetVisibleImage",
			"endpoint": "cameras/fisheye"
		}, {
			"apiCommand": {
				"apiCommandGroup": "Camera",
				"arguments": {},
				"category": "Beta",
				"commandTimeout": 20000,
				"commandType": "Action",
				"id": "GetVideoFile",
				"name": "GetVideoFile",
				"resultType": "Misty.HomeRobot.Services.Api.Commands.ResponseObjects.VideoResponse, Misty.HomeRobot.Services, Version=2.1.1.9469, Culture=neutral, PublicKeyToken=null"
			},
			"baseApiCommand": "GetVideoFile",
			"endpoint": "video"
		}, {
			"apiCommand": {
				"apiCommandGroup": "General",
				"arguments": {},
				"category": "Current",
				"commandTimeout": 20000,
				"commandType": "Information",
				"id": "GetAvailableWifiNetworks",
				"name": "GetAvailableWifiNetworks",
				"resultType": "System.Collections.Generic.List`1[[Misty.HomeRobot.Services.Communication.WiFiNetworkScanResult, Misty.HomeRobot, Version=2.1.1.9469, Culture=neutral, PublicKeyToken=null]], System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a"
			},
			"baseApiCommand": "GetAvailableWifiNetworks",
			"endpoint": "networks/scan"
		}, {
			"apiCommand": {
				"apiCommandGroup": "General",
				"arguments": {},
				"category": "Current",
				"commandTimeout": 20000,
				"commandType": "Information",
				"id": "GetBatteryLevel",
				"name": "GetBatteryLevel",
				"resultType": "Misty.HomeRobot.Robot.SensoryMessages.BatteryChargeMessage, Misty.HomeRobot, Version=2.1.1.9469, Culture=neutral, PublicKeyToken=null"
			},
			"baseApiCommand": "GetBatteryLevel",
			"endpoint": "battery"
		}, {
			"apiCommand": {
				"apiCommandGroup": "General",
				"arguments": {},
				"category": "Current",
				"commandTimeout": 20000,
				"commandType": "Information",
				"id": "GetDeviceInformation",
				"name": "GetDeviceInformation",
				"resultType": "Misty.HomeRobot.Robot.RobotDeviceInformation, Misty.HomeRobot, Version=2.1.1.9469, Culture=neutral, PublicKeyToken=null"
			},
			"baseApiCommand": "GetDeviceInformation",
			"endpoint": "device"
		}, {
			"apiCommand": {
				"apiCommandGroup": "General",
				"arguments": {
					"command": {
						"getValueType": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
						"name": "Command",
						"ordinalNumber": 0,
						"value": ""
					}
				},
				"category": "Current",
				"commandTimeout": 20000,
				"commandType": "Information",
				"id": "GetHelp",
				"name": "GetHelp",
				"resultType": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a],[System.Collections.Generic.List`1[[Misty.HomeRobot.Api.ApiCommandDetails, Misty.HomeRobot, Version=2.1.1.9469, Culture=neutral, PublicKeyToken=null]], System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a]], System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a"
			},
			"baseApiCommand": "GetHelp",
			"endpoint": "help"
		}, {
			"apiCommand": {
				"apiCommandGroup": "Display",
				"arguments": {
					"fileName": {
						"getValueType": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
						"name": "FileName",
						"ordinalNumber": 0,
						"value": ""
					},
					"base64": {
						"getValueType": "System.Boolean, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
						"name": "Base64",
						"ordinalNumber": 1,
						"value": false
					}
				},
				"category": "Current",
				"commandTimeout": 20000,
				"commandType": "Information",
				"id": "GetImage",
				"name": "GetImage",
				"resultType": "Misty.HomeRobot.Api.Commands.ResponseObjects.ImageResponse, Misty.HomeRobot.Services, Version=2.1.1.9469, Culture=neutral, PublicKeyToken=null"
			},
			"baseApiCommand": "GetImage",
			"endpoint": "images"
		}, {
			"apiCommand": {
				"apiCommandGroup": "ComputerVision",
				"arguments": {},
				"category": "Current",
				"commandTimeout": 20000,
				"commandType": "Information",
				"id": "GetLearnedFaces",
				"name": "GetKnownFaces",
				"resultType": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a]], System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a"
			},
			"baseApiCommand": "GetLearnedFaces",
			"endpoint": "faces"
		}, {
			"apiCommand": {
				"apiCommandGroup": "Speakers",
				"arguments": {},
				"category": "Current",
				"commandTimeout": 20000,
				"commandType": "Information",
				"id": "GetListOfAudioFiles",
				"name": "GetAudioList",
				"resultType": "System.Collections.Generic.List`1[[Misty.HomeRobot.Api.Commands.ResponseObjects.AudioDataResponse, Misty.HomeRobot.Services, Version=2.1.1.9469, Culture=neutral, PublicKeyToken=null]], System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a"
			},
			"baseApiCommand": "GetListOfAudioFiles",
			"endpoint": "audio/list"
		}, {
			"apiCommand": {
				"apiCommandGroup": "Display",
				"arguments": {},
				"category": "Current",
				"commandTimeout": 20000,
				"commandType": "Information",
				"id": "GetListOfImages",
				"name": "GetImageList",
				"resultType": "System.Collections.Generic.IList`1[[Misty.HomeRobot.Api.Commands.ResponseObjects.ImageDataResponse, Misty.HomeRobot.Services, Version=2.1.1.9469, Culture=neutral, PublicKeyToken=null]], System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a"
			},
			"baseApiCommand": "GetListOfImages",
			"endpoint": "images/list"
		}, {
			"apiCommand": {
				"apiCommandGroup": "General",
				"arguments": {
					"date": {
						"getValueType": "System.DateTime, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
						"name": "Date",
						"ordinalNumber": 0,
						"value": "2019-09-11T00:00:00Z"
					}
				},
				"category": "Current",
				"commandTimeout": 20000,
				"commandType": "Information",
				"id": "GetLogFile",
				"name": "GetLogFile",
				"resultType": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a"
			},
			"baseApiCommand": "GetLogFile",
			"endpoint": "logs"
		}, {
			"apiCommand": {
				"apiCommandGroup": "SLAM",
				"arguments": {},
				"category": "Alpha",
				"commandTimeout": 35000,
				"commandType": "Information",
				"id": "SlamGetMap",
				"name": "GetMap",
				"resultType": "Misty.HomeRobot.OccupancyGrid, Misty.HomeRobot, Version=2.1.1.9469, Culture=neutral, PublicKeyToken=null"
			},
			"baseApiCommand": "SlamGetMap",
			"endpoint": "slam/map"
		}, {
			"apiCommand": {
				"apiCommandGroup": "Skill",
				"arguments": {},
				"category": "Current",
				"commandTimeout": 20000,
				"commandType": "Information",
				"id": "GetRunningSkills",
				"name": "GetRunningSkills",
				"resultType": "System.Collections.Generic.List`1[[Misty.HomeRobot.Api.Commands.ResponseObjects.RunningSkillResponse, Misty.HomeRobot.Services, Version=2.1.1.9469, Culture=neutral, PublicKeyToken=null]], System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a"
			},
			"baseApiCommand": "GetRunningSkills",
			"endpoint": "skills/running"
		}, {
			"apiCommand": {
				"apiCommandGroup": "General",
				"arguments": {},
				"category": "Current",
				"commandTimeout": 20000,
				"commandType": "Information",
				"id": "GetSavedWifiNetworks",
				"name": "GetSavedWifiNetworks",
				"resultType": "System.Collections.Generic.List`1[[Misty.HomeRobot.Services.Communication.WiFiNetworkConfiguration, Misty.HomeRobot, Version=2.1.1.9469, Culture=neutral, PublicKeyToken=null]], System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a"
			},
			"baseApiCommand": "GetSavedWifiNetworks",
			"endpoint": "networks"
		}, {
			"apiCommand": {
				"apiCommandGroup": "General",
				"arguments": {},
				"category": "Current",
				"commandTimeout": 20000,
				"commandType": "Information",
				"id": "GetSerialSensorValues",
				"name": "GetSerialSensorValues",
				"resultType": "System.Collections.Generic.IList`1[[System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a]], System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a"
			},
			"baseApiCommand": "GetSerialSensorValues",
			"endpoint": "serial"
		}, {
			"apiCommand": {
				"apiCommandGroup": "Skill",
				"arguments": {},
				"category": "Current",
				"commandTimeout": 20000,
				"commandType": "Information",
				"id": "GetSkills",
				"name": "GetSkills",
				"resultType": "System.Collections.Generic.List`1[[Misty.HomeRobot.Skills.IRobotSkill, Misty.HomeRobot, Version=2.1.1.9469, Culture=neutral, PublicKeyToken=null]], System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a"
			},
			"baseApiCommand": "GetSkills",
			"endpoint": "skills"
		}, {
			"apiCommand": {
				"apiCommandGroup": "General",
				"arguments": {},
				"category": "Current",
				"commandTimeout": 20000,
				"commandType": "Information",
				"id": "GetStoreUpdateAvailable",
				"name": "GetStoreUpdateAvailable",
				"resultType": "System.Boolean, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a"
			},
			"baseApiCommand": "GetStoreUpdateAvailable",
			"endpoint": "system/updates"
		}, {
			"apiCommand": {
				"apiCommandGroup": "General",
				"arguments": {
					"websocketClass": {
						"getValueType": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
						"name": "WebsocketClass",
						"ordinalNumber": 0,
						"value": ""
					}
				},
				"category": "Current",
				"commandTimeout": 20000,
				"commandType": "Information",
				"id": "GetWebsocketHelp",
				"name": "GetWebsocketNames",
				"resultType": "System.Collections.Generic.List`1[[Misty.HomeRobot.Api.Commands.ResponseObjects.WebSocketHelpResponse, Misty.HomeRobot.Services, Version=2.1.1.9469, Culture=neutral, PublicKeyToken=null]], System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a"
			},
			"baseApiCommand": "GetWebsocketHelp",
			"endpoint": "websockets"
		}, {
			"apiCommand": {
				"apiCommandGroup": "SLAM",
				"arguments": {
					"x": {
						"getValueType": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
						"name": "X",
						"ordinalNumber": 0,
						"value": 0
					},
					"y": {
						"getValueType": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
						"name": "Y",
						"ordinalNumber": 0,
						"value": 0
					}
				},
				"category": "Alpha",
				"commandTimeout": 20000,
				"commandType": "Information",
				"id": "SlamGetPath",
				"name": "GetSlamPath",
				"resultType": "System.Collections.Generic.IList`1[[Misty.HomeRobot.GridCell, Misty.HomeRobot, Version=2.1.1.9469, Culture=neutral, PublicKeyToken=null]], System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a"
			},
			"baseApiCommand": "SlamGetPath",
			"endpoint": "slam/path"
		}, {
			"apiCommand": {
				"apiCommandGroup": "SLAM",
				"arguments": {},
				"category": "Alpha",
				"commandTimeout": 20000,
				"commandType": "Information",
				"id": "SlamGetStatus",
				"name": "GetSlamStatus",
				"resultType": "Misty.HomeRobot.Robot.SensoryMessages.SlamStatus, Misty.HomeRobot, Version=2.1.1.9469, Culture=neutral, PublicKeyToken=null"
			},
			"baseApiCommand": "SlamGetStatus",
			"endpoint": "slam/status"
		}, {
			"apiCommand": {
				"apiCommandGroup": "Display",
				"arguments": {},
				"category": "Beta",
				"commandTimeout": 20000,
				"commandType": "Configuration",
				"id": "GetBlinkSettings",
				"name": "GetBlinkSettings",
				"resultType": "Misty.HomeRobot.Api.Commands.ResponseObjects.BlinkImageSettingsResponse, Misty.HomeRobot.Services, Version=2.1.1.9469, Culture=neutral, PublicKeyToken=null"
			},
			"baseApiCommand": "GetBlinkSettings",
			"endpoint": "blink/settings"
		}, {
			"apiCommand": {
				"apiCommandGroup": "Display",
				"arguments": {
					"base64": {
						"getValueType": "System.Boolean, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
						"name": "Base64",
						"ordinalNumber": 0,
						"value": false
					},
					"fileName": {
						"getValueType": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
						"name": "FileName",
						"ordinalNumber": 1,
						"value": null
					},
					"width": {
						"getValueType": "System.Nullable`1[[System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a]], System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
						"name": "Width",
						"ordinalNumber": 2,
						"value": null
					},
					"height": {
						"getValueType": "System.Nullable`1[[System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a]], System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
						"name": "Height",
						"ordinalNumber": 3,
						"value": null
					},
					"displayOnScreen": {
						"getValueType": "System.Boolean, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
						"name": "DisplayOnScreen",
						"ordinalNumber": 4,
						"value": false
					},
					"overwriteExisting": {
						"getValueType": "System.Boolean, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
						"name": "OverwriteExisting",
						"ordinalNumber": 5,
						"value": false
					}
				},
				"category": "Current",
				"commandTimeout": 35000,
				"commandType": "Action",
				"id": "TakePicture",
				"name": "TakePicture",
				"resultType": "Misty.HomeRobot.Api.Commands.ResponseObjects.ImageResponse, Misty.HomeRobot.Services, Version=2.1.1.9469, Culture=neutral, PublicKeyToken=null"
			},
			"baseApiCommand": "TakePicture",
			"endpoint": "cameras/rgb"
		}],
		"post": [{
			"apiCommand": {
				"apiCommandGroup": "General",
				"arguments": {
					"components": {
						"getValueType": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a]], System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
						"name": "Components",
						"ordinalNumber": 0,
						"value": []
					}
				},
				"category": "Current",
				"commandTimeout": 20000,
				"commandType": "Configuration",
				"id": "PerformTargetedUpdate",
				"name": "PerformTargetedUpdate",
				"resultType": "System.Boolean, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a"
			},
			"baseApiCommand": "PerformTargetedUpdate",
			"endpoint": "system/update/component"
		}, {
			"apiCommand": {
				"apiCommandGroup": "General",
				"arguments": {
					"core": {
						"getValueType": "System.Boolean, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
						"name": "Core",
						"ordinalNumber": 0,
						"value": false
					},
					"sensoryServices": {
						"getValueType": "System.Boolean, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
						"name": "SensoryServices",
						"ordinalNumber": 1,
						"value": false
					}
				},
				"category": "Current",
				"commandTimeout": 20000,
				"commandType": "Configuration",
				"id": "RestartRobot",
				"name": "RestartRobot",
				"resultType": "System.Boolean, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a"
			},
			"baseApiCommand": "RestartRobot",
			"endpoint": "reboot"
		}, {
			"apiCommand": {
				"apiCommandGroup": "Speakers",
				"arguments": {
					"volume": {
						"getValueType": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
						"name": "Volume",
						"ordinalNumber": 0,
						"value": -1
					}
				},
				"category": "Current",
				"commandTimeout": 20000,
				"commandType": "Configuration",
				"id": "SetDefaultVolume",
				"name": "SetDefaultVolume",
				"resultType": "System.Boolean, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a"
			},
			"baseApiCommand": "SetDefaultVolume",
			"endpoint": "audio/volume"
		}, {
			"apiCommand": {
				"apiCommandGroup": "General",
				"arguments": {
					"version": {
						"getValueType": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
						"name": "Version",
						"ordinalNumber": 0,
						"value": null
					}
				},
				"category": "Current",
				"commandTimeout": 20000,
				"commandType": "Configuration",
				"id": "SetWebsocketVersion",
				"name": "SetWebsocketVersion",
				"resultType": "System.Boolean, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a"
			},
			"baseApiCommand": "SetWebsocketVersion",
			"endpoint": "websocket/version"
		}, {
			"apiCommand": {
				"apiCommandGroup": "General",
				"arguments": {
					"message": {
						"getValueType": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
						"name": "Message",
						"ordinalNumber": 0,
						"value": null
					}
				},
				"category": "Current",
				"commandTimeout": 20000,
				"commandType": "Action",
				"id": "MessageStreamWrite",
				"name": "WriteSerial",
				"resultType": "System.Boolean, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a"
			},
			"baseApiCommand": "MessageStreamWrite",
			"endpoint": "serial"
		}, {
			"apiCommand": {
				"apiCommandGroup": "Attachments",
				"arguments": {
					"on": {
						"getValueType": "System.Boolean, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
						"name": "On",
						"ordinalNumber": 0,
						"value": false
					}
				},
				"category": "Alpha",
				"commandTimeout": 20000,
				"commandType": "Action",
				"id": "SetFlashlight",
				"name": "SetFlashlight",
				"resultType": "System.Boolean, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a"
			},
			"baseApiCommand": "SetFlashlight",
			"endpoint": "flashlight"
		}, {
			"apiCommand": {
				"apiCommandGroup": "SLAM",
				"arguments": {},
				"category": "Current",
				"commandTimeout": 20000,
				"commandType": "Action",
				"id": "SlamStopStreaming",
				"name": "StopSlamStreaming",
				"resultType": "System.Boolean, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a"
			},
			"baseApiCommand": "SlamStopStreaming",
			"endpoint": "slam/streaming/stop"
		}, {
			"apiCommand": {
				"apiCommandGroup": "Camera",
				"arguments": {},
				"category": "Beta",
				"commandTimeout": 20000,
				"commandType": "Action",
				"id": "StartRecordingVideo",
				"name": "StartRecordingVideo",
				"resultType": "System.Boolean, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a"
			},
			"baseApiCommand": "StartRecordingVideo",
			"endpoint": "video/record/start"
		}, {
			"apiCommand": {
				"apiCommandGroup": "Camera",
				"arguments": {},
				"category": "Beta",
				"commandTimeout": 20000,
				"commandType": "Action",
				"id": "StopRecordingVideo",
				"name": "StopRecordingVideo",
				"resultType": "System.Boolean, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a"
			},
			"baseApiCommand": "StopRecordingVideo",
			"endpoint": "video/record/stop"
		}, {
			"apiCommand": {
				"apiCommandGroup": "General",
				"arguments": {},
				"category": "Current",
				"commandTimeout": 20000,
				"commandType": "Information",
				"id": "PerformSystemUpdate",
				"name": "PerformSystemUpdate",
				"resultType": "System.Boolean, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a"
			},
			"baseApiCommand": "PerformSystemUpdate",
			"endpoint": "system/update"
		}, {
			"apiCommand": {
				"apiCommandGroup": "General",
				"arguments": {
					"category": {
						"getValueType": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
						"name": "Category",
						"ordinalNumber": 0,
						"value": ""
					},
					"key": {
						"getValueType": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
						"name": "Key",
						"ordinalNumber": 1,
						"value": ""
					}
				},
				"category": "Beta",
				"commandTimeout": 20000,
				"commandType": "Information",
				"id": "GetDiagnostics",
				"name": "GetDiagnostics",
				"resultType": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a"
			},
			"baseApiCommand": "GetDiagnostics",
			"endpoint": "diagnostics"
		}, {
			"apiCommand": {
				"apiCommandGroup": "SLAM",
				"arguments": {},
				"category": "Alpha",
				"commandTimeout": 20000,
				"commandType": "Configuration",
				"id": "SlamReset",
				"name": "ResetSlam",
				"resultType": "System.Boolean, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a"
			},
			"baseApiCommand": "SlamReset",
			"endpoint": "slam/reset"
		}, {
			"apiCommand": {
				"apiCommandGroup": "Skill",
				"arguments": {
					"skill": {
						"getValueType": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
						"name": "Skill",
						"ordinalNumber": 0,
						"value": null
					}
				},
				"category": "Current",
				"commandTimeout": 20000,
				"commandType": "Configuration",
				"id": "CancelSkill",
				"name": "CancelSkill",
				"resultType": "System.Boolean, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a"
			},
			"baseApiCommand": "CancelSkill",
			"endpoint": "skills/cancel"
		}, {
			"apiCommand": {
				"apiCommandGroup": "Display",
				"arguments": {},
				"category": "Current",
				"commandTimeout": 20000,
				"commandType": "Configuration",
				"id": "ClearDisplayText",
				"name": "ClearDisplayText",
				"resultType": "System.Boolean, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a"
			},
			"baseApiCommand": "ClearDisplayText",
			"endpoint": "text/clear"
		}, {
			"apiCommand": {
				"apiCommandGroup": "General",
				"arguments": {
					"networkId": {
						"getValueType": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
						"name": "NetworkId",
						"ordinalNumber": 0,
						"value": 0
					}
				},
				"category": "Current",
				"commandTimeout": 20000,
				"commandType": "Configuration",
				"id": "ConnectToSavedWifi",
				"name": "ConnectToSavedWifi",
				"resultType": "System.Boolean, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a"
			},
			"baseApiCommand": "ConnectToSavedWifi",
			"endpoint": "networks"
		}, {
			"apiCommand": {
				"apiCommandGroup": "General",
				"arguments": {
					"networkName": {
						"getValueType": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
						"name": "NetworkName",
						"ordinalNumber": 0,
						"value": null
					},
					"password": {
						"getValueType": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
						"name": "Password",
						"ordinalNumber": 1,
						"value": null
					}
				},
				"category": "Current",
				"commandTimeout": 20000,
				"commandType": "Configuration",
				"id": "SetNetworkConnection",
				"name": "ConnectWiFi",
				"resultType": "System.Boolean, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a"
			},
			"baseApiCommand": "SetNetworkConnection",
			"endpoint": "networks/create"
		}, {
			"apiCommand": {
				"apiCommandGroup": "Skill",
				"arguments": {
					"skill": {
						"getValueType": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
						"name": "Skill",
						"ordinalNumber": 0,
						"value": null
					},
					"method": {
						"getValueType": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
						"name": "Method",
						"ordinalNumber": 1,
						"value": null
					}
				},
				"category": "Current",
				"commandTimeout": 20000,
				"commandType": "Configuration",
				"id": "RunSkill",
				"name": "RunSkill",
				"resultType": "System.Boolean, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a"
			},
			"baseApiCommand": "RunSkill",
			"endpoint": "skills/start"
		}, {
			"apiCommand": {
				"apiCommandGroup": "Speakers",
				"arguments": {
					"fileName": {
						"getValueType": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
						"name": "FileName",
						"ordinalNumber": 0,
						"value": null
					},
					"data": {
						"getValueType": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
						"name": "Data",
						"ordinalNumber": 1,
						"value": null
					},
					"immediatelyApply": {
						"getValueType": "System.Boolean, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
						"name": "ImmediatelyApply",
						"ordinalNumber": 2,
						"value": false
					},
					"overwriteExisting": {
						"getValueType": "System.Boolean, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
						"name": "OverwriteExisting",
						"ordinalNumber": 3,
						"value": false
					}
				},
				"category": "Current",
				"commandTimeout": 20000,
				"commandType": "Configuration",
				"id": "SaveAudioAssetToRobot",
				"name": "SaveAudio",
				"resultType": "System.Collections.Generic.IList`1[[Misty.HomeRobot.Api.Commands.ResponseObjects.IAssetResponse, Misty.HomeRobot.Services, Version=2.1.1.9469, Culture=neutral, PublicKeyToken=null]], System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a"
			},
			"baseApiCommand": "SaveAudioAssetToRobot",
			"endpoint": "audio"
		}, {
			"apiCommand": {
				"apiCommandGroup": "Display",
				"arguments": {
					"fileName": {
						"getValueType": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
						"name": "FileName",
						"ordinalNumber": 0,
						"value": null
					},
					"data": {
						"getValueType": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
						"name": "Data",
						"ordinalNumber": 1,
						"value": null
					},
					"width": {
						"getValueType": "System.Nullable`1[[System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a]], System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
						"name": "Width",
						"ordinalNumber": 2,
						"value": null
					},
					"height": {
						"getValueType": "System.Nullable`1[[System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a]], System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
						"name": "Height",
						"ordinalNumber": 3,
						"value": null
					},
					"immediatelyApply": {
						"getValueType": "System.Boolean, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
						"name": "ImmediatelyApply",
						"ordinalNumber": 4,
						"value": false
					},
					"overwriteExisting": {
						"getValueType": "System.Boolean, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
						"name": "OverwriteExisting",
						"ordinalNumber": 5,
						"value": false
					}
				},
				"category": "Current",
				"commandTimeout": 20000,
				"commandType": "Configuration",
				"id": "SaveImageAssetToRobot",
				"name": "SaveImage",
				"resultType": "System.Collections.Generic.IList`1[[Misty.HomeRobot.Api.Commands.ResponseObjects.IAssetResponse, Misty.HomeRobot.Services, Version=2.1.1.9469, Culture=neutral, PublicKeyToken=null]], System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a"
			},
			"baseApiCommand": "SaveImageAssetToRobot",
			"endpoint": "images"
		}, {
			"apiCommand": {
				"apiCommandGroup": "Skill",
				"arguments": {
					"file": {
						"getValueType": "System.Byte[], System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
						"name": "File",
						"ordinalNumber": 0,
						"value": null
					},
					"overwriteExisting": {
						"getValueType": "System.Boolean, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
						"name": "OverwriteExisting",
						"ordinalNumber": 1,
						"value": true
					},
					"uniqueId": {
						"getValueType": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
						"name": "UniqueId",
						"ordinalNumber": 2,
						"value": null
					}
				},
				"category": "Current",
				"commandTimeout": 60000,
				"commandType": "Configuration",
				"id": "SaveSkillFiles",
				"name": "SaveSkillFiles",
				"resultType": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a"
			},
			"baseApiCommand": "SaveSkillFiles",
			"endpoint": "skills"
		}, {
			"apiCommand": {
				"apiCommandGroup": "Display",
				"arguments": {
					"blink": {
						"getValueType": "System.Boolean, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
						"name": "Blink",
						"ordinalNumber": 0,
						"value": false
					}
				},
				"category": "Beta",
				"commandTimeout": 20000,
				"commandType": "Configuration",
				"id": "SetBlinking",
				"name": "SetBlinking",
				"resultType": "System.Boolean, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a"
			},
			"baseApiCommand": "SetBlinking",
			"endpoint": "blink"
		}, {
			"apiCommand": {
				"apiCommandGroup": "Display",
				"arguments": {
					"revertToDefault": {
						"getValueType": "System.Boolean, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
						"name": "RevertToDefault",
						"ordinalNumber": 0,
						"value": false
					},
					"closedEyeMinMs": {
						"getValueType": "System.Nullable`1[[System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a]], System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
						"name": "ClosedEyeMinMs",
						"ordinalNumber": 1,
						"value": null
					},
					"closedEyeMaxMs": {
						"getValueType": "System.Nullable`1[[System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a]], System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
						"name": "ClosedEyeMaxMs",
						"ordinalNumber": 2,
						"value": null
					},
					"openEyeMinMs": {
						"getValueType": "System.Nullable`1[[System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a]], System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
						"name": "OpenEyeMinMs",
						"ordinalNumber": 3,
						"value": null
					},
					"openEyeMaxMs": {
						"getValueType": "System.Nullable`1[[System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a]], System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
						"name": "OpenEyeMaxMs",
						"ordinalNumber": 4,
						"value": null
					},
					"blinkImages": {
						"getValueType": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
						"name": "BlinkImages",
						"ordinalNumber": 5,
						"value": null
					}
				},
				"category": "Beta",
				"commandTimeout": 20000,
				"commandType": "Configuration",
				"id": "SetBlinkSettings",
				"name": "SetBlinkSettings",
				"resultType": "System.Boolean, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a"
			},
			"baseApiCommand": "SetBlinkSettings",
			"endpoint": "blink/settings"
		}, {
			"apiCommand": {
				"apiCommandGroup": "Display",
				"arguments": {
					"revertToDefault": {
						"getValueType": "System.Boolean, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
						"name": "RevertToDefault",
						"ordinalNumber": 0,
						"value": false
					},
					"ledEnabled": {
						"getValueType": "System.Nullable`1[[System.Boolean, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a]], System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
						"name": "LEDEnabled",
						"ordinalNumber": 1,
						"value": null
					},
					"keyPhraseEnabled": {
						"getValueType": "System.Nullable`1[[System.Boolean, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a]], System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
						"name": "KeyPhraseEnabled",
						"ordinalNumber": 3,
						"value": null
					},
					"keyPhraseFile": {
						"getValueType": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
						"name": "KeyPhraseFile",
						"ordinalNumber": 4,
						"value": null
					}
				},
				"category": "Beta",
				"commandTimeout": 20000,
				"commandType": "Configuration",
				"id": "SetNotificationSettings",
				"name": "SetNotificationSettings",
				"resultType": "System.Boolean, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a"
			},
			"baseApiCommand": "SetNotificationSettings",
			"endpoint": "notification/settings"
		}, {
			"apiCommand": {
				"apiCommandGroup": "Skill",
				"arguments": {
					"skill": {
						"getValueType": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
						"name": "Skill",
						"ordinalNumber": 0,
						"value": null
					},
					"eventName": {
						"getValueType": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
						"name": "EventName",
						"ordinalNumber": 1,
						"value": null
					},
					"payload": {
						"getValueType": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
						"name": "Payload",
						"ordinalNumber": 2,
						"value": null
					}
				},
				"category": "Current",
				"commandTimeout": 20000,
				"commandType": "Configuration",
				"id": "TriggerSkillEvent",
				"name": "TriggerSkillEvent",
				"resultType": "System.Boolean, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a"
			},
			"baseApiCommand": "TriggerSkillEvent",
			"endpoint": "skills/event"
		}, {
			"apiCommand": {
				"apiCommandGroup": "Locomotion",
				"arguments": {
					"bumpSensorsEnabled": {
						"getValueType": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a],[System.Boolean, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a]], System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
						"name": "BumpSensorsEnabled",
						"ordinalNumber": 0,
						"value": null
					},
					"timeOfFlightThresholds": {
						"getValueType": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a],[System.Double, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a]], System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
						"name": "TimeOfFlightThresholds",
						"ordinalNumber": 1,
						"value": null
					}
				},
				"category": "Alpha",
				"commandTimeout": 20000,
				"commandType": "Configuration",
				"id": "UpdateBaseHazardManagementSettings",
				"name": "UpdateBaseHazardManagementSettings",
				"resultType": "System.Boolean, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a"
			},
			"baseApiCommand": "UpdateBaseHazardManagementSettings",
			"endpoint": "hazard/updatebasesettings"
		}, {
			"apiCommand": {
				"apiCommandGroup": "ComputerVision",
				"arguments": {},
				"category": "Current",
				"commandTimeout": 20000,
				"commandType": "Action",
				"id": "CancelFaceTraining",
				"name": "CancelFaceTraining",
				"resultType": "System.Boolean, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a"
			},
			"baseApiCommand": "CancelFaceTraining",
			"endpoint": "faces/training/cancel"
		}, {
			"apiCommand": {
				"apiCommandGroup": "Display",
				"arguments": {
					"fileName": {
						"getValueType": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
						"name": "FileName",
						"ordinalNumber": 0,
						"value": null
					},
					"alpha": {
						"getValueType": "System.Double, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
						"name": "Alpha",
						"ordinalNumber": 1,
						"value": 1.0
					}
				},
				"category": "Current",
				"commandTimeout": 20000,
				"commandType": "Action",
				"id": "ChangeDisplayImage",
				"name": "DisplayImage",
				"resultType": "Misty.HomeRobot.Kinematics.CommandGroup, Misty.HomeRobot, Version=2.1.1.9469, Culture=neutral, PublicKeyToken=null"
			},
			"baseApiCommand": "ChangeDisplayImage",
			"endpoint": "images/display"
		}, {
			"apiCommand": {
				"apiCommandGroup": "General",
				"arguments": {
					"red": {
						"getValueType": "System.Byte, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
						"name": "Red",
						"ordinalNumber": 0,
						"value": 0
					},
					"green": {
						"getValueType": "System.Byte, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
						"name": "Green",
						"ordinalNumber": 1,
						"value": 0
					},
					"blue": {
						"getValueType": "System.Byte, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
						"name": "Blue",
						"ordinalNumber": 2,
						"value": 0
					}
				},
				"category": "Current",
				"commandTimeout": 20000,
				"commandType": "Action",
				"id": "ChangeLED",
				"name": "ChangeLED",
				"resultType": "Misty.HomeRobot.Kinematics.CommandGroup, Misty.HomeRobot, Version=2.1.1.9469, Culture=neutral, PublicKeyToken=null"
			},
			"baseApiCommand": "ChangeLED",
			"endpoint": "led"
		}, {
			"apiCommand": {
				"apiCommandGroup": "Locomotion",
				"arguments": {
					"linearVelocity": {
						"getValueType": "System.Double, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
						"name": "LinearVelocity",
						"ordinalNumber": 0,
						"value": 0.0
					},
					"angularVelocity": {
						"getValueType": "System.Double, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
						"name": "AngularVelocity",
						"ordinalNumber": 1,
						"value": 0.0
					}
				},
				"category": "Current",
				"commandTimeout": 20000,
				"commandType": "Action",
				"id": "Drive",
				"name": "Drive",
				"resultType": "Misty.HomeRobot.Kinematics.CommandGroup, Misty.HomeRobot, Version=2.1.1.9469, Culture=neutral, PublicKeyToken=null"
			},
			"baseApiCommand": "Drive",
			"endpoint": "drive"
		}, {
			"apiCommand": {
				"apiCommandGroup": "Locomotion",
				"arguments": {
					"linearVelocity": {
						"getValueType": "System.Double, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
						"name": "LinearVelocity",
						"ordinalNumber": 0,
						"value": 0.0
					},
					"angularVelocity": {
						"getValueType": "System.Double, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
						"name": "AngularVelocity",
						"ordinalNumber": 1,
						"value": 0.0
					},
					"timeMs": {
						"getValueType": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
						"name": "TimeMs",
						"ordinalNumber": 2,
						"value": 0
					},
					"degree": {
						"getValueType": "System.Double, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
						"name": "Degree",
						"ordinalNumber": 3,
						"value": 0.0
					}
				},
				"category": "Current",
				"commandTimeout": 20000,
				"commandType": "Action",
				"id": "DriveTime",
				"name": "DriveTime",
				"resultType": "Misty.HomeRobot.Kinematics.CommandGroup, Misty.HomeRobot, Version=2.1.1.9469, Culture=neutral, PublicKeyToken=null"
			},
			"baseApiCommand": "DriveTime",
			"endpoint": "drive/time"
		}, {
			"apiCommand": {
				"apiCommandGroup": "Locomotion",
				"arguments": {
					"destination": {
						"getValueType": "System.Collections.Generic.List`1[[Misty.HomeRobot.GridCell, Misty.HomeRobot, Version=2.1.1.9469, Culture=neutral, PublicKeyToken=null]], System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
						"name": "Destination",
						"ordinalNumber": 0,
						"value": null
					}
				},
				"category": "Alpha",
				"commandTimeout": 20000,
				"commandType": "Action",
				"id": "DriveToLocation",
				"name": "DriveToLocationActionPlan",
				"resultType": "Misty.HomeRobot.Kinematics.CommandGroup, Misty.HomeRobot, Version=2.1.1.9469, Culture=neutral, PublicKeyToken=null"
			},
			"baseApiCommand": "DriveToLocation",
			"endpoint": "drive/coordinates"
		}, {
			"apiCommand": {
				"apiCommandGroup": "Locomotion",
				"arguments": {
					"waypoints": {
						"getValueType": "System.Collections.Generic.List`1[[Misty.HomeRobot.GridCell, Misty.HomeRobot, Version=2.1.1.9469, Culture=neutral, PublicKeyToken=null]], System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
						"name": "Waypoints",
						"ordinalNumber": 0,
						"value": []
					}
				},
				"category": "Alpha",
				"commandTimeout": 20000,
				"commandType": "Action",
				"id": "FollowPath",
				"name": "FollowPath",
				"resultType": "Misty.HomeRobot.Kinematics.CommandGroup, Misty.HomeRobot, Version=2.1.1.9469, Culture=neutral, PublicKeyToken=null"
			},
			"baseApiCommand": "FollowPath",
			"endpoint": "drive/path"
		}, {
			"apiCommand": {
				"apiCommandGroup": "Locomotion",
				"arguments": {
					"motorMask": {
						"getValueType": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
						"name": "MotorMask",
						"ordinalNumber": 0,
						"value": 65535
					}
				},
				"category": "Current",
				"commandTimeout": 20000,
				"commandType": "Action",
				"id": "Halt",
				"name": "Halt",
				"resultType": "Misty.HomeRobot.Brain.MotorControlCommand, Misty.HomeRobot, Version=2.1.1.9469, Culture=neutral, PublicKeyToken=null"
			},
			"baseApiCommand": "Halt",
			"endpoint": "halt"
		}, {
			"apiCommand": {
				"apiCommandGroup": "Locomotion",
				"arguments": {
					"leftTrackSpeed": {
						"getValueType": "System.Double, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
						"name": "LeftTrackSpeed",
						"ordinalNumber": 0,
						"value": 0.0
					},
					"rightTrackSpeed": {
						"getValueType": "System.Double, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
						"name": "RightTrackSpeed",
						"ordinalNumber": 1,
						"value": 0.0
					}
				},
				"category": "Current",
				"commandTimeout": 20000,
				"commandType": "Action",
				"id": "LocomotionTrack",
				"name": "DriveTrack",
				"resultType": "Misty.HomeRobot.Kinematics.CommandGroup, Misty.HomeRobot, Version=2.1.1.9469, Culture=neutral, PublicKeyToken=null"
			},
			"baseApiCommand": "LocomotionTrack",
			"endpoint": "drive/track"
		}, {
			"apiCommand": {
				"apiCommandGroup": "Attachments",
				"arguments": {
					"arm": {
						"getValueType": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
						"name": "Arm",
						"ordinalNumber": 0,
						"value": null
					},
					"position": {
						"getValueType": "System.Double, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
						"name": "Position",
						"ordinalNumber": 1,
						"value": 0.0
					},
					"velocity": {
						"getValueType": "System.Nullable`1[[System.Double, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a]], System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
						"name": "Velocity",
						"ordinalNumber": 2,
						"value": null
					},
					"duration": {
						"getValueType": "System.Double, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
						"name": "Duration",
						"ordinalNumber": 3,
						"value": 0.0
					},
					"units": {
						"getValueType": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
						"name": "Units",
						"ordinalNumber": 4,
						"value": null
					}
				},
				"category": "Current",
				"commandTimeout": 20000,
				"commandType": "Action",
				"id": "MoveArm",
				"name": "MoveArm",
				"resultType": "Misty.HomeRobot.Kinematics.CommandGroup, Misty.HomeRobot, Version=2.1.1.9469, Culture=neutral, PublicKeyToken=null"
			},
			"baseApiCommand": "MoveArm",
			"endpoint": "arms"
		}, {
			"apiCommand": {
				"apiCommandGroup": "Attachments",
				"arguments": {
					"leftArmPosition": {
						"getValueType": "System.Double, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
						"name": "LeftArmPosition",
						"ordinalNumber": 0,
						"value": 0.0
					},
					"rightArmPosition": {
						"getValueType": "System.Double, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
						"name": "RightArmPosition",
						"ordinalNumber": 1,
						"value": 0.0
					},
					"leftArmVelocity": {
						"getValueType": "System.Nullable`1[[System.Double, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a]], System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
						"name": "LeftArmVelocity",
						"ordinalNumber": 2,
						"value": null
					},
					"rightArmVelocity": {
						"getValueType": "System.Nullable`1[[System.Double, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a]], System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
						"name": "RightArmVelocity",
						"ordinalNumber": 3,
						"value": null
					},
					"duration": {
						"getValueType": "System.Double, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
						"name": "Duration",
						"ordinalNumber": 4,
						"value": 0.0
					},
					"units": {
						"getValueType": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
						"name": "Units",
						"ordinalNumber": 5,
						"value": null
					}
				},
				"category": "Current",
				"commandTimeout": 20000,
				"commandType": "Action",
				"id": "MoveArms",
				"name": "MoveArms",
				"resultType": "Misty.HomeRobot.Kinematics.CommandGroup, Misty.HomeRobot, Version=2.1.1.9469, Culture=neutral, PublicKeyToken=null"
			},
			"baseApiCommand": "MoveArms",
			"endpoint": "arms/set"
		}, {
			"apiCommand": {
				"apiCommandGroup": "General",
				"arguments": {
					"pitch": {
						"getValueType": "System.Double, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
						"name": "Pitch",
						"ordinalNumber": 0,
						"value": 0.0
					},
					"roll": {
						"getValueType": "System.Double, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
						"name": "Roll",
						"ordinalNumber": 1,
						"value": 0.0
					},
					"yaw": {
						"getValueType": "System.Double, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
						"name": "Yaw",
						"ordinalNumber": 2,
						"value": 0.0
					},
					"velocity": {
						"getValueType": "System.Nullable`1[[System.Double, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a]], System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
						"name": "Velocity",
						"ordinalNumber": 3,
						"value": null
					},
					"units": {
						"getValueType": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
						"name": "Units",
						"ordinalNumber": 4,
						"value": null
					}
				},
				"category": "Current",
				"commandTimeout": 20000,
				"commandType": "Action",
				"id": "MoveHead",
				"name": "MoveHead",
				"resultType": "Misty.HomeRobot.Kinematics.CommandGroup, Misty.HomeRobot, Version=2.1.1.9469, Culture=neutral, PublicKeyToken=null"
			},
			"baseApiCommand": "MoveHead",
			"endpoint": "head"
		}, {
			"apiCommand": {
				"apiCommandGroup": "Speakers",
				"arguments": {
					"fileName": {
						"getValueType": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
						"name": "FileName",
						"ordinalNumber": 0,
						"value": null
					},
					"volume": {
						"getValueType": "System.Nullable`1[[System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a]], System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
						"name": "Volume",
						"ordinalNumber": 1,
						"value": null
					}
				},
				"category": "Current",
				"commandTimeout": 20000,
				"commandType": "Action",
				"id": "PlayAudioClip",
				"name": "PlayAudioClip",
				"resultType": "Misty.HomeRobot.Robot.AudioActionCommand, Misty.HomeRobot, Version=2.1.1.9469, Culture=neutral, PublicKeyToken=null"
			},
			"baseApiCommand": "PlayAudioClip",
			"endpoint": "audio/play"
		}, {
			"apiCommand": {
				"apiCommandGroup": "General",
				"arguments": {
					"method": {
						"getValueType": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
						"name": "Method",
						"ordinalNumber": 0,
						"value": null
					},
					"resource": {
						"getValueType": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
						"name": "Resource",
						"ordinalNumber": 1,
						"value": null
					},
					"authorizationType": {
						"getValueType": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
						"name": "AuthorizationType",
						"ordinalNumber": 2,
						"value": null
					},
					"token": {
						"getValueType": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
						"name": "Token",
						"ordinalNumber": 3,
						"value": null
					},
					"arguments": {
						"getValueType": "System.Byte, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
						"name": "Arguments",
						"ordinalNumber": 4,
						"value": 0
					},
					"save": {
						"getValueType": "System.Boolean, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
						"name": "Save",
						"ordinalNumber": 5,
						"value": false
					},
					"apply": {
						"getValueType": "System.Boolean, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
						"name": "Apply",
						"ordinalNumber": 6,
						"value": false
					},
					"fileName": {
						"getValueType": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
						"name": "FileName",
						"ordinalNumber": 7,
						"value": null
					},
					"contentType": {
						"getValueType": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
						"name": "ContentType",
						"ordinalNumber": 8,
						"value": null
					}
				},
				"category": "Alpha",
				"commandTimeout": 60000,
				"commandType": "Action",
				"id": "SendExternalRequest",
				"name": "SendExternalRequest",
				"resultType": "Misty.HomeRobot.Api.ApiRequestGroup, Misty.HomeRobot, Version=2.1.1.9469, Culture=neutral, PublicKeyToken=null"
			},
			"baseApiCommand": "SendExternalRequest",
			"endpoint": "request"
		}, {
			"apiCommand": {
				"apiCommandGroup": "SLAM",
				"arguments": {},
				"category": "Alpha",
				"commandTimeout": 20000,
				"commandType": "Action",
				"id": "SlamStartMapping",
				"name": "StartMapping",
				"resultType": "System.Boolean, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a"
			},
			"baseApiCommand": "SlamStartMapping",
			"endpoint": "slam/map/start"
		}, {
			"apiCommand": {
				"apiCommandGroup": "SLAM",
				"arguments": {},
				"category": "Current",
				"commandTimeout": 20000,
				"commandType": "Action",
				"id": "SlamStartStreaming",
				"name": "StartSlamStreaming",
				"resultType": "System.Boolean, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a"
			},
			"baseApiCommand": "SlamStartStreaming",
			"endpoint": "slam/streaming/start"
		}, {
			"apiCommand": {
				"apiCommandGroup": "SLAM",
				"arguments": {},
				"category": "Alpha",
				"commandTimeout": 20000,
				"commandType": "Action",
				"id": "SlamStartTracking",
				"name": "StartTracking",
				"resultType": "System.Boolean, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a"
			},
			"baseApiCommand": "SlamStartTracking",
			"endpoint": "slam/track/start"
		}, {
			"apiCommand": {
				"apiCommandGroup": "SLAM",
				"arguments": {},
				"category": "Alpha",
				"commandTimeout": 20000,
				"commandType": "Action",
				"id": "SlamStopMapping",
				"name": "StopMapping",
				"resultType": "System.Boolean, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a"
			},
			"baseApiCommand": "SlamStopMapping",
			"endpoint": "slam/map/stop"
		}, {
			"apiCommand": {
				"apiCommandGroup": "SLAM",
				"arguments": {},
				"category": "Alpha",
				"commandTimeout": 20000,
				"commandType": "Action",
				"id": "SlamStopTracking",
				"name": "StopSlamTracking",
				"resultType": "System.Boolean, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a"
			},
			"baseApiCommand": "SlamStopTracking",
			"endpoint": "slam/track/stop"
		}, {
			"apiCommand": {
				"apiCommandGroup": "ComputerVision",
				"arguments": {},
				"category": "Current",
				"commandTimeout": 20000,
				"commandType": "Action",
				"id": "StartFaceDetection",
				"name": "StartFaceDetection",
				"resultType": "System.Boolean, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a"
			},
			"baseApiCommand": "StartFaceDetection",
			"endpoint": "faces/detection/start"
		}, {
			"apiCommand": {
				"apiCommandGroup": "ComputerVision",
				"arguments": {},
				"category": "Current",
				"commandTimeout": 20000,
				"commandType": "Action",
				"id": "StartFaceRecognition",
				"name": "StartFaceRecognition",
				"resultType": "System.Boolean, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a"
			},
			"baseApiCommand": "StartFaceRecognition",
			"endpoint": "faces/recognition/start"
		}, {
			"apiCommand": {
				"apiCommandGroup": "ComputerVision",
				"arguments": {
					"faceId": {
						"getValueType": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
						"name": "FaceId",
						"ordinalNumber": 0,
						"value": null
					}
				},
				"category": "Current",
				"commandTimeout": 20000,
				"commandType": "Action",
				"id": "StartFaceTraining",
				"name": "StartFaceTraining",
				"resultType": "Misty.HomeRobot.Api.Commands.ResponseObjects.StartFaceTrainingResponse, Misty.HomeRobot.Services, Version=2.1.1.9469, Culture=neutral, PublicKeyToken=null"
			},
			"baseApiCommand": "StartFaceTraining",
			"endpoint": "faces/training/start"
		}, {
			"apiCommand": {
				"apiCommandGroup": "Microphone",
				"arguments": {},
				"category": "Current",
				"commandTimeout": 20000,
				"commandType": "Action",
				"id": "StartKeyPhraseRecognition",
				"name": "StartKeyPhraseRecognition",
				"resultType": "System.Boolean, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a"
			},
			"baseApiCommand": "StartKeyPhraseRecognition",
			"endpoint": "audio/keyphrase/start"
		}, {
			"apiCommand": {
				"apiCommandGroup": "Microphone",
				"arguments": {
					"fileName": {
						"getValueType": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
						"name": "FileName",
						"ordinalNumber": 0,
						"value": null
					}
				},
				"category": "Current",
				"commandTimeout": 20000,
				"commandType": "Action",
				"id": "StartRecordingAudio",
				"name": "StartRecordingAudio",
				"resultType": "System.Boolean, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a"
			},
			"baseApiCommand": "StartRecordingAudio",
			"endpoint": "audio/record/start"
		}, {
			"apiCommand": {
				"apiCommandGroup": "Locomotion",
				"arguments": {
					"hold": {
						"getValueType": "System.Boolean, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
						"name": "Hold",
						"ordinalNumber": 0,
						"value": false
					}
				},
				"category": "Current",
				"commandTimeout": 20000,
				"commandType": "Action",
				"id": "Stop",
				"name": "Stop",
				"resultType": "Misty.HomeRobot.Kinematics.CommandGroup, Misty.HomeRobot, Version=2.1.1.9469, Culture=neutral, PublicKeyToken=null"
			},
			"baseApiCommand": "Stop",
			"endpoint": "drive/stop"
		}, {
			"apiCommand": {
				"apiCommandGroup": "ComputerVision",
				"arguments": {},
				"category": "Current",
				"commandTimeout": 20000,
				"commandType": "Action",
				"id": "StopFaceDetection",
				"name": "StopFaceDetection",
				"resultType": "System.Boolean, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a"
			},
			"baseApiCommand": "StopFaceDetection",
			"endpoint": "faces/detection/stop"
		}, {
			"apiCommand": {
				"apiCommandGroup": "ComputerVision",
				"arguments": {},
				"category": "Current",
				"commandTimeout": 20000,
				"commandType": "Action",
				"id": "StopFaceRecognition",
				"name": "StopFaceRecognition",
				"resultType": "System.Boolean, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a"
			},
			"baseApiCommand": "StopFaceRecognition",
			"endpoint": "faces/recognition/stop"
		}, {
			"apiCommand": {
				"apiCommandGroup": "Microphone",
				"arguments": {},
				"category": "Current",
				"commandTimeout": 20000,
				"commandType": "Action",
				"id": "StopKeyPhraseRecognition",
				"name": "StopKeyPhraseRecognition",
				"resultType": "System.Boolean, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a"
			},
			"baseApiCommand": "StopKeyPhraseRecognition",
			"endpoint": "audio/keyphrase/stop"
		}, {
			"apiCommand": {
				"apiCommandGroup": "Microphone",
				"arguments": {},
				"category": "Current",
				"commandTimeout": 20000,
				"commandType": "Action",
				"id": "StopRecordingAudio",
				"name": "StopRecordingAudio",
				"resultType": "System.Boolean, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a"
			},
			"baseApiCommand": "StopRecordingAudio",
			"endpoint": "audio/record/stop"
		}],
		"delete": [{
			"apiCommand": {
				"apiCommandGroup": "General",
				"arguments": {
					"networkId": {
						"getValueType": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
						"name": "NetworkId",
						"ordinalNumber": 0,
						"value": 0
					}
				},
				"category": "Current",
				"commandTimeout": 20000,
				"commandType": "Information",
				"id": "ForgetWifi",
				"name": "ForgetWifi",
				"resultType": "System.Boolean, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a"
			},
			"baseApiCommand": "ForgetWifi",
			"endpoint": "networks"
		}, {
			"apiCommand": {
				"apiCommandGroup": "Speakers",
				"arguments": {
					"fileName": {
						"getValueType": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
						"name": "FileName",
						"ordinalNumber": 0,
						"value": null
					}
				},
				"category": "Current",
				"commandTimeout": 20000,
				"commandType": "Configuration",
				"id": "DeleteAudioAssetFromRobot",
				"name": "DeleteAudio",
				"resultType": "System.Collections.Generic.IList`1[[System.Boolean, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a]], System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a"
			},
			"baseApiCommand": "DeleteAudioAssetFromRobot",
			"endpoint": "audio"
		}, {
			"apiCommand": {
				"apiCommandGroup": "Display",
				"arguments": {
					"fileName": {
						"getValueType": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
						"name": "FileName",
						"ordinalNumber": 0,
						"value": null
					}
				},
				"category": "Current",
				"commandTimeout": 20000,
				"commandType": "Configuration",
				"id": "DeleteImageAssetFromRobot",
				"name": "DeleteImage",
				"resultType": "System.Collections.Generic.IList`1[[System.Boolean, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a]], System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a"
			},
			"baseApiCommand": "DeleteImageAssetFromRobot",
			"endpoint": "images"
		}, {
			"apiCommand": {
				"apiCommandGroup": "Skill",
				"arguments": {
					"skill": {
						"getValueType": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
						"name": "Skill",
						"ordinalNumber": 0,
						"value": null
					}
				},
				"category": "Current",
				"commandTimeout": 20000,
				"commandType": "Configuration",
				"id": "DeleteSkill",
				"name": "DeleteSkill",
				"resultType": "System.Boolean, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a"
			},
			"baseApiCommand": "DeleteSkill",
			"endpoint": "skills"
		}, {
			"apiCommand": {
				"apiCommandGroup": "Display",
				"arguments": {
					"blinkImages": {
						"getValueType": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
						"name": "BlinkImages",
						"ordinalNumber": 0,
						"value": null
					}
				},
				"category": "Beta",
				"commandTimeout": 20000,
				"commandType": "Configuration",
				"id": "RemoveBlinkMappings",
				"name": "RemoveBlinkMappings",
				"resultType": "System.Boolean, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a"
			},
			"baseApiCommand": "RemoveBlinkMappings",
			"endpoint": "blink/images"
		}, {
			"apiCommand": {
				"apiCommandGroup": "ComputerVision",
				"arguments": {
					"faceId": {
						"getValueType": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
						"name": "FaceId",
						"ordinalNumber": 0,
						"value": null
					}
				},
				"category": "Current",
				"commandTimeout": 20000,
				"commandType": "Action",
				"id": "ClearLearnedFaces",
				"name": "ForgetFaces",
				"resultType": "System.Boolean, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a"
			},
			"baseApiCommand": "ClearLearnedFaces",
			"endpoint": "faces"
		}],
		"put": []
	},
	"status": "Success"
}

var categories = {
	"Assets": ["DeleteAudioAssetFromRobot", "DeleteImageAssetFromRobot", "GetAudioFile", "GetImage", "GetListOfAudioFiles", "GetListOfImages", "SaveAudioAssetToRobot", "SaveImageAssetToRobot"],

	"Backpack": ["GetSerialSensorValues", "MessageStreamWrite"],

	"Events": ["GetWebsocketHelp", "GetWebsocketVersion", "SetWebsocketVersion"],

	"Expression": ["ChangeDisplayImage", "ChangeLED", "ClearDisplayText", "PlayAudioClip", "SetFlashlight", "SetBlinking"],

	"Movement": ["Drive", "DriveTime", "DriveToLocation", "Halt", "LocomotionTrack", "MoveArm", "MoveArms", "MoveHead", "Stop", /*"LookAtObject", "LookAt", "PointAtObject", "PointAt"*/],

	"Navigation": ["FollowPath", "SlamGetDepthImage", "SlamGetMap", "SlamGetSensorSerialNumber", "SlamGetPath", "SlamGetVisibleImage", "SlamGetStatus", "SlamReset", "SlamStartMapping", "SlamStartStreaming", "SlamStartTracking", "SlamStopMapping", "SlamStopStreaming", "SlamStopTracking"],

	"Perception": ["CancelFaceTraining", "ClearLearnedFaces", "GetLearnedFaces", "GetVideoFile", "StartFaceDetection", "StartFaceRecognition", "StartFaceTraining", "StopFaceDetection", "StopFaceRecognition", "StartRecordingAudio", "StartRecordingVideo", /*"StartRecordingAudioRaw",*/ "StopRecordingAudio",  "StopRecordingVideo", "TakePicture"],

	"Requests": ["SendExternalRequest"],

	"Skills": ["CancelSkill", "DeleteSkill", "GetSkills", "GetRunningSkills", "RunSkill", "SaveSkillFiles", "TriggerSkillEvent" ],

	"System": ["ConnectToSavedWifi", "ForgetWifi", "GetAvailableWifiNetworks", "GetBatteryLevel", "GetCameraData", "GetDeviceInformation", "GetHelp", "GetLogFile", /*"GetLogLevel",*/ "GetSavedWifiNetworks", "GetStoreUpdateAvailable", "GetWebsocketVersion", "PerformSystemUpdate", "PerformTargetedUpdate", "RestartRobot", "SetDefaultVolume", /* "SetLogLevel",*/  "SetNetworkConnection"/*, "SetWebsocketVersion" */]
};

var categoryNames = ["Assets", "Backpack", "Events", "Expression", "Movement", "Navigation", "Perception", "Requests", "Skills", "System"];

Object.keys(data.result).forEach(method => {
	const mt = data.result[method]
	Object.keys(mt).forEach(cname => {
		const command = mt[cname]
		Object.keys(categories).forEach(category => {
			const members = categories[category]			
			if( members.indexOf(command.apiCommand.id) >= 0 ){
				command.apiCommand.webCategory = category 
			}
		})
	})
})

module.exports = data