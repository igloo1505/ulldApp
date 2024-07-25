import onBuildMethods from "./onBuildMethodList"
import tempPaths from "./buildTargetPaths.json"
import { PathKeys } from "@ulld/utilities/types"


(async () => {
    for await (const f of onBuildMethods) {
       await f.func(tempPaths as Record<PathKeys, string>) 
    }
})()
