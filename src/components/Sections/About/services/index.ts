import {getProfileRepo} from "@/components/Sections/About/repositories";
import {Profile} from "@/components/Sections/About/types";

export const getProfileService = async (): Promise<Partial<Profile>> => {
  try {
    const querySnapshot = await getProfileRepo()
    return querySnapshot.data() || {}
  } catch (error) {
    console.error(error)
    return {}
  }
}