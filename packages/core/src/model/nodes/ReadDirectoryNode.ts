import { ChartNode, NodeId, PortId } from '../NodeBase';
import { NodeInputDefinition, NodeOutputDefinition } from '../NodeBase';
import { NodeImpl, nodeDefinition } from '../NodeImpl';
import { nanoid } from 'nanoid';
import { Inputs, Outputs } from '../GraphProcessor';
import { expectType } from '../..';
import { InternalProcessContext } from '../ProcessContext';

export type ReadDirectoryNode = ChartNode<'readDirectory', ReadDirectoryNodeData>;

type ReadDirectoryNodeData = {
  path: string;
  usePathInput: boolean;

  recursive: boolean;
  useRecursiveInput: boolean;

  includeDirectories: boolean;
  useIncludeDirectoriesInput: boolean;

  filterGlobs: string[];
  useFilterGlobsInput: boolean;

  relative: boolean;
  useRelativeInput: boolean;

  ignores?: string[];
  useIgnoresInput: boolean;
};

export class ReadDirectoryNodeImpl extends NodeImpl<ReadDirectoryNode> {
  static create(): ReadDirectoryNode {
    return {
      id: nanoid() as NodeId,
      type: 'readDirectory',
      title: 'Read Directory',
      visualData: { x: 0, y: 0 },
      data: {
        path: 'examples',
        recursive: false,
        usePathInput: false,
        useRecursiveInput: false,
        includeDirectories: false,
        useIncludeDirectoriesInput: false,
        filterGlobs: [],
        useFilterGlobsInput: false,
        relative: false,
        useRelativeInput: false,
        ignores: [],
        useIgnoresInput: false,
      },
    };
  }

  getInputDefinitions(): NodeInputDefinition[] {
    const inputDefinitions: NodeInputDefinition[] = [];

    if (this.chartNode.data.usePathInput) {
      inputDefinitions.push({
        id: 'path' as PortId,
        title: 'Path',
        dataType: 'string',
        required: true,
      });
    }

    if (this.chartNode.data.useRecursiveInput) {
      inputDefinitions.push({
        id: 'recursive' as PortId,
        title: 'Recursive',
        dataType: 'boolean',
        required: true,
      });
    }

    if (this.chartNode.data.useIncludeDirectoriesInput) {
      inputDefinitions.push({
        id: 'includeDirectories' as PortId,
        title: 'Include Directories',
        dataType: 'boolean',
        required: true,
      });
    }

    if (this.chartNode.data.useFilterGlobsInput) {
      inputDefinitions.push({
        id: 'filterGlobs' as PortId,
        title: 'Filter Globs',
        dataType: 'string[]',
        required: true,
      });
    }

    if (this.chartNode.data.useRelativeInput) {
      inputDefinitions.push({
        id: 'relative' as PortId,
        title: 'Relative',
        dataType: 'boolean',
        required: true,
      });
    }

    return inputDefinitions;
  }

  getOutputDefinitions(): NodeOutputDefinition[] {
    return [
      {
        id: 'rootPath' as PortId,
        title: 'Root Path',
        dataType: 'string',
      },
      {
        id: 'paths' as PortId,
        title: 'Paths',
        dataType: 'string[]',
      },
    ];
  }

  async process(inputData: Inputs, context: InternalProcessContext): Promise<Outputs> {
    const path = this.chartNode.data.usePathInput
      ? expectType(inputData['path' as PortId], 'string')
      : this.chartNode.data.path;

    const recursive = this.chartNode.data.useRecursiveInput
      ? expectType(inputData['recursive' as PortId], 'boolean')
      : this.chartNode.data.recursive;

    const includeDirectories = this.chartNode.data.useIncludeDirectoriesInput
      ? expectType(inputData['includeDirectories' as PortId], 'boolean')
      : this.chartNode.data.includeDirectories;

    const filterGlobs = this.chartNode.data.useFilterGlobsInput
      ? expectType(inputData['filterGlobs' as PortId], 'string[]')
      : this.chartNode.data.filterGlobs;

    const relative = this.chartNode.data.useRelativeInput
      ? expectType(inputData['relative' as PortId], 'boolean')
      : this.chartNode.data.relative;

    const ignores = this.chartNode.data.useIgnoresInput
      ? expectType(inputData['ignores' as PortId], 'string[]')
      : this.chartNode.data.ignores;

    // Can be slow, assume a directory doesn't change during execution
    // TODO once this is at auto-gpt level changing files, will need to rethink, but good enough
    // for now
    const cacheKey = `ReadDirectoryNode-${path}-${recursive}-${includeDirectories}-${filterGlobs.join()}-${relative}-${ignores?.join()}`;
    const cached = context.executionCache.get(cacheKey);
    if (cached) {
      return cached as Outputs;
    }

    const files = await context.nativeApi.readdir(path, undefined, {
      recursive,
      includeDirectories,
      filterGlobs,
      relative,
      ignores,
    });

    const outputs: Outputs = {
      ['paths' as PortId]: { type: 'string[]', value: files },
      ['rootPath' as PortId]: { type: 'string', value: path },
    };

    context.executionCache.set(cacheKey, outputs);

    return outputs;
  }
}

export const readDirectoryNode = nodeDefinition(ReadDirectoryNodeImpl, 'Read Directory');
