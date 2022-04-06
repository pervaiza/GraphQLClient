export interface SpeakerModel {
  id: any
  name: any
  bio: any
  webSite: any
}

export const createEmptySpeaker = (): SpeakerModel => ({
  id: { value: undefined, error: "" },
  name: { value: "", error: "" },
  bio: { value: "", error: "" },
  webSite: { value: "", error: "" },
})
