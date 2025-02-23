/**
 * @fileoverview gRPC-Web generated client stub for viam.service.slam.v1
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v0.0.0
// source: service/slam/v1/slam.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var common_v1_common_pb = require('../../../common/v1/common_pb.js')

var google_api_annotations_pb = require('../../../google/api/annotations_pb.js')

var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js')
const proto = {};
proto.viam = {};
proto.viam.service = {};
proto.viam.service.slam = {};
proto.viam.service.slam.v1 = require('./slam_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.viam.service.slam.v1.SLAMServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.viam.service.slam.v1.SLAMServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.service.slam.v1.GetPositionRequest,
 *   !proto.viam.service.slam.v1.GetPositionResponse>}
 */
const methodDescriptor_SLAMService_GetPosition = new grpc.web.MethodDescriptor(
  '/viam.service.slam.v1.SLAMService/GetPosition',
  grpc.web.MethodType.UNARY,
  proto.viam.service.slam.v1.GetPositionRequest,
  proto.viam.service.slam.v1.GetPositionResponse,
  /**
   * @param {!proto.viam.service.slam.v1.GetPositionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.service.slam.v1.GetPositionResponse.deserializeBinary
);


/**
 * @param {!proto.viam.service.slam.v1.GetPositionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.service.slam.v1.GetPositionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.service.slam.v1.GetPositionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.service.slam.v1.SLAMServiceClient.prototype.getPosition =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.service.slam.v1.SLAMService/GetPosition',
      request,
      metadata || {},
      methodDescriptor_SLAMService_GetPosition,
      callback);
};


/**
 * @param {!proto.viam.service.slam.v1.GetPositionRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.service.slam.v1.GetPositionResponse>}
 *     Promise that resolves to the response
 */
proto.viam.service.slam.v1.SLAMServicePromiseClient.prototype.getPosition =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.service.slam.v1.SLAMService/GetPosition',
      request,
      metadata || {},
      methodDescriptor_SLAMService_GetPosition);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.service.slam.v1.GetMapRequest,
 *   !proto.viam.service.slam.v1.GetMapResponse>}
 */
const methodDescriptor_SLAMService_GetMap = new grpc.web.MethodDescriptor(
  '/viam.service.slam.v1.SLAMService/GetMap',
  grpc.web.MethodType.UNARY,
  proto.viam.service.slam.v1.GetMapRequest,
  proto.viam.service.slam.v1.GetMapResponse,
  /**
   * @param {!proto.viam.service.slam.v1.GetMapRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.service.slam.v1.GetMapResponse.deserializeBinary
);


/**
 * @param {!proto.viam.service.slam.v1.GetMapRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.service.slam.v1.GetMapResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.service.slam.v1.GetMapResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.service.slam.v1.SLAMServiceClient.prototype.getMap =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.service.slam.v1.SLAMService/GetMap',
      request,
      metadata || {},
      methodDescriptor_SLAMService_GetMap,
      callback);
};


/**
 * @param {!proto.viam.service.slam.v1.GetMapRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.service.slam.v1.GetMapResponse>}
 *     Promise that resolves to the response
 */
proto.viam.service.slam.v1.SLAMServicePromiseClient.prototype.getMap =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.service.slam.v1.SLAMService/GetMap',
      request,
      metadata || {},
      methodDescriptor_SLAMService_GetMap);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.service.slam.v1.GetPositionNewRequest,
 *   !proto.viam.service.slam.v1.GetPositionNewResponse>}
 */
const methodDescriptor_SLAMService_GetPositionNew = new grpc.web.MethodDescriptor(
  '/viam.service.slam.v1.SLAMService/GetPositionNew',
  grpc.web.MethodType.UNARY,
  proto.viam.service.slam.v1.GetPositionNewRequest,
  proto.viam.service.slam.v1.GetPositionNewResponse,
  /**
   * @param {!proto.viam.service.slam.v1.GetPositionNewRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.service.slam.v1.GetPositionNewResponse.deserializeBinary
);


/**
 * @param {!proto.viam.service.slam.v1.GetPositionNewRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.service.slam.v1.GetPositionNewResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.service.slam.v1.GetPositionNewResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.service.slam.v1.SLAMServiceClient.prototype.getPositionNew =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.service.slam.v1.SLAMService/GetPositionNew',
      request,
      metadata || {},
      methodDescriptor_SLAMService_GetPositionNew,
      callback);
};


/**
 * @param {!proto.viam.service.slam.v1.GetPositionNewRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.service.slam.v1.GetPositionNewResponse>}
 *     Promise that resolves to the response
 */
proto.viam.service.slam.v1.SLAMServicePromiseClient.prototype.getPositionNew =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.service.slam.v1.SLAMService/GetPositionNew',
      request,
      metadata || {},
      methodDescriptor_SLAMService_GetPositionNew);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.service.slam.v1.GetPointCloudMapRequest,
 *   !proto.viam.service.slam.v1.GetPointCloudMapResponse>}
 */
const methodDescriptor_SLAMService_GetPointCloudMap = new grpc.web.MethodDescriptor(
  '/viam.service.slam.v1.SLAMService/GetPointCloudMap',
  grpc.web.MethodType.UNARY,
  proto.viam.service.slam.v1.GetPointCloudMapRequest,
  proto.viam.service.slam.v1.GetPointCloudMapResponse,
  /**
   * @param {!proto.viam.service.slam.v1.GetPointCloudMapRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.service.slam.v1.GetPointCloudMapResponse.deserializeBinary
);


/**
 * @param {!proto.viam.service.slam.v1.GetPointCloudMapRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.service.slam.v1.GetPointCloudMapResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.service.slam.v1.GetPointCloudMapResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.service.slam.v1.SLAMServiceClient.prototype.getPointCloudMap =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.service.slam.v1.SLAMService/GetPointCloudMap',
      request,
      metadata || {},
      methodDescriptor_SLAMService_GetPointCloudMap,
      callback);
};


/**
 * @param {!proto.viam.service.slam.v1.GetPointCloudMapRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.service.slam.v1.GetPointCloudMapResponse>}
 *     Promise that resolves to the response
 */
proto.viam.service.slam.v1.SLAMServicePromiseClient.prototype.getPointCloudMap =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.service.slam.v1.SLAMService/GetPointCloudMap',
      request,
      metadata || {},
      methodDescriptor_SLAMService_GetPointCloudMap);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.service.slam.v1.GetInternalStateRequest,
 *   !proto.viam.service.slam.v1.GetInternalStateResponse>}
 */
const methodDescriptor_SLAMService_GetInternalState = new grpc.web.MethodDescriptor(
  '/viam.service.slam.v1.SLAMService/GetInternalState',
  grpc.web.MethodType.UNARY,
  proto.viam.service.slam.v1.GetInternalStateRequest,
  proto.viam.service.slam.v1.GetInternalStateResponse,
  /**
   * @param {!proto.viam.service.slam.v1.GetInternalStateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.service.slam.v1.GetInternalStateResponse.deserializeBinary
);


/**
 * @param {!proto.viam.service.slam.v1.GetInternalStateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.service.slam.v1.GetInternalStateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.service.slam.v1.GetInternalStateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.service.slam.v1.SLAMServiceClient.prototype.getInternalState =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.service.slam.v1.SLAMService/GetInternalState',
      request,
      metadata || {},
      methodDescriptor_SLAMService_GetInternalState,
      callback);
};


/**
 * @param {!proto.viam.service.slam.v1.GetInternalStateRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.service.slam.v1.GetInternalStateResponse>}
 *     Promise that resolves to the response
 */
proto.viam.service.slam.v1.SLAMServicePromiseClient.prototype.getInternalState =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.service.slam.v1.SLAMService/GetInternalState',
      request,
      metadata || {},
      methodDescriptor_SLAMService_GetInternalState);
};


module.exports = proto.viam.service.slam.v1;

