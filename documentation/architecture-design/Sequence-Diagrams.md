Sequence diagram represent the execution of specific API endpoint of each module.

# Resource Sequence Diagram

The Resource module has two endpoints: /search and /detail.

The /search endpoint returns the entire range of resources available and catalogued within the metadata catalogue (e.g. services, distributions etc.).

This information is extracted from the metadata catalogue in the form of _resultset;_ resultsets are then sent to the Converter, where these are converted into the format used for the payload returned to the GUI.

The /detail endpoint returns the detailed metadata of a specific resource.

The process to provide the detailed metadata is similar to the route described above for the /resources endpoint.

The following diagram describes in detail such process.

![image](uploads/e758d7f79ab4ee6dda2ef0f382cf095b/image.png)


# External Service Connector Sequence Diagram

The External Service Connector has two endpoints: /execute and /getoriginalurl.

The /execute enpoint executes a specific query on the TCS endpoints and returns the payload.

In the execute endpoint a request to Cerif DB is first made to get the metadata about the requested distribution. Then the system behaviour depends on the DDSS returned.

If DDSS type is DOWNLOADABLE_FILE the External Service Connector returns to the GUI the url to download file, if DDSS format is application/geo+json the returned payload from TCS is processed by the Converter.

The /getoriginalurl edpoint returns the URL of a configured TCS.

In the /getoriginalurl endpoint the External Service Connector returns the redirect url to the GUI, and the GUI execute a call directly to TCS.

 ![image](uploads/1f19afbccdd052a91379debc86afce65/image.png)


> [Summary](../README.md)